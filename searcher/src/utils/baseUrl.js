import env from 'react-dotenv'

const baseUrl = () => {
  let result = ''
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    result += env.BACKEND_URI
  }
  return result + 'api/articles/'
}

export default baseUrl()
