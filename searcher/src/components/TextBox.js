import React from 'react'
import { EuiText } from '@elastic/eui'
import JSONPretty from 'react-json-pretty'
import PropTypes from 'prop-types'
const TextBox = ({ json }) => {
  return (
    <EuiText grow={true}>
      {json && (
        <div className='TextBox eui-yScrollWithShadows'>
          <JSONPretty id='json-pretty' className='JSONText' data={json} />
        </div>
      )}
    </EuiText>
  )
}

TextBox.propTypes = {
  json: PropTypes.array,
}

export default TextBox
