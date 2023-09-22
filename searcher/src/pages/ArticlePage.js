import React from 'react'
import { useParams } from 'react-router-dom'
import { EuiPanel } from '@elastic/eui'
import Article from '../components/Article'

const ArticlePage = () => (
  <EuiPanel className='BasePanel'>
    <Article uuid={useParams().uuid} />
  </EuiPanel>
)

export default ArticlePage
