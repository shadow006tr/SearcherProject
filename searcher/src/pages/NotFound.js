import React from 'react'
import { EuiPanel, EuiTitle, EuiImage, EuiSpacer } from '@elastic/eui'
import NotFoundImage from '../assets/images/NotFound.svg'

const NotFound = () => {
  return (
    <EuiPanel className='BasePanel'>
      <div className='Centered'>
        <EuiTitle size='l'>
          <h1>Whoops. Page not found</h1>
        </EuiTitle>
        <EuiSpacer size='xxl' />
        <EuiImage size='xl' alt='Page not found image' src={NotFoundImage} />
      </div>
    </EuiPanel>
  )
}

export default NotFound
