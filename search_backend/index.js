require('dotenv').config()
const https = require('https');
const axios = require('axios')
const express = require('express')
const cors = require('cors')
const {resolve} = require('path')
const app = express()

app.use(cors())
app.use(express.static('build'))

const agent = new https.Agent({
  rejectUnauthorized: false
})

let foundData

axios.get(process.env.SEARCH_URI, {
  httpsAgent: agent,
  headers: { 'Content-Type': 'application/x-ndjson'},
  data: {
    'size': 500,
    'query':
      {"match_all": {}},
  },
  auth: {username: 'admin', password: 'admin'}
}).then(res => {
  foundData = res.data.hits.hits.map(data => data._source).sort((a, b) => a.id - b.id)
}).catch(error => {console.log(`error: ${error}`)})

app.get('/api/articles', async (request, response) => {
  try {
    response.json(foundData)
  } catch (error) {console.log(`error: ${error}`)}
})

app.get('/api/articles/:id', async (request, response) => {
  try {
    const id = request.params.id
    if (id < foundData.length) {
      const article = foundData[id - 1]
      response.json(article)
    } else {
      response.status(404).end()
    }
  } catch (error) {console.log(`error: ${error}`)}
})

app.get('*', (request, response) => {
  response.sendFile(resolve('build', 'index.html'))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
