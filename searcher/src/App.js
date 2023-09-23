import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { EuiProvider, EuiPanel } from '@elastic/eui'
import 'react-json-pretty/themes/acai.css'
import '@elastic/eui/dist/eui_theme_light.css'
import './App.css'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import NotFound from './pages/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'articles/:uuid',
      loader: ({ params }) => {
        return params.uuid
      },
      element: <ArticlePage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  return (
    <div className='Container'>
      <div className='Wrapper'>
        <EuiProvider colorMode='light'>
          <EuiPanel className='BasePanel'>
            <RouterProvider router={router} />
          </EuiPanel>
        </EuiProvider>
      </div>
    </div>
  )
}

export default App
