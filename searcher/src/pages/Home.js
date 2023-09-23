import React, { useEffect, useState } from 'react'
import Switch from '../components/Switch'
import { useGeneratedHtmlId, EuiLoadingSpinner, EuiSpacer } from '@elastic/eui'
import TextBox from '../components/TextBox'
import Table from '../components/Table'
import getJson from '../utils/getJson'
import env from 'react-dotenv'

const Home = () => {
  const basicButtonGroupPrefix = useGeneratedHtmlId({
    prefix: 'buttonGroup',
  })
  const [mode, setMode] = useState(`${basicButtonGroupPrefix}__0`)
  const [isLoading, setIsLoading] = useState(true)
  const [json, setJson] = useState([])

  useEffect(() => {
    getJson(setJson, `${env.BACKEND_URI}api/articles/`).then(() =>
      setIsLoading(false)
    )
  }, [])
  return (
    <>
      <Switch
        basicButtonGroupPrefix={basicButtonGroupPrefix}
        mode={mode}
        setMode={setMode}
      />
      <EuiSpacer size='xl' />
      {isLoading ? (
        <EuiLoadingSpinner className='Spinner' size='xl' />
      ) : mode === `${basicButtonGroupPrefix}__0` ? (
        <TextBox key='TextBox' json={json} />
      ) : (
        <Table key='Table' json={json} />
      )}
    </>
  )
}

export default Home
