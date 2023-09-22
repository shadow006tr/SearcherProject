import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import getJson from '../utils/getJson'
import { EuiSpacer, EuiTitle, EuiText } from '@elastic/eui'
import env from 'react-dotenv'

const Article = ({ uuid }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    getJson(setData, `${env.BACKEND_URI}api/articles/${uuid}`)
  }, [])
  return (
    <>
      {data && (
        <>
          <EuiTitle size='l'>
            <h1>{data.name}</h1>
          </EuiTitle>
          <EuiSpacer size='s' />
          <EuiTitle size='s'>
            <h3>By {data.email}</h3>
          </EuiTitle>
          <EuiSpacer size='xl' />
          <EuiText grow={true}>
            <p>{data.body}</p>
          </EuiText>
        </>
      )}
    </>
  )
}

Article.propTypes = {
  uuid: PropTypes.string,
}
export default Article
