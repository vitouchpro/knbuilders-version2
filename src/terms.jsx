import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Terms from './pages/Terms.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout current="legal"><Terms /></Layout>
  </React.StrictMode>,
)
