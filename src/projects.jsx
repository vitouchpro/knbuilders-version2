import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Projects from './pages/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout current="projects"><Projects /></Layout>
  </React.StrictMode>,
)
