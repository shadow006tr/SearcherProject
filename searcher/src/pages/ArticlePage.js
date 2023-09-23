import React from 'react'
import Article from '../components/Article'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  let params = useParams()
  return <Article uuid={params.uuid} />
}

export default ArticlePage
