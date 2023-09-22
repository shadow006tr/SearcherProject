import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EuiProvider } from '@elastic/eui'
import 'react-json-pretty/themes/acai.css'
import '@elastic/eui/dist/eui_theme_light.css'
import './App.css'
import Home from './pages/Home'
import ArticlePage from './pages/ArticlePage'
import NotFound from './pages/NotFound'

const App = () => (
  <div className='Container'>
    <div className='Wrapper'>
      <div className='Content'>
        <EuiProvider colorMode='light'>
          <Router>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/articles/:uuid' element={<ArticlePage />} />
            </Routes>
          </Router>
        </EuiProvider>
      </div>
    </div>
  </div>
)

export default App
