import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout.jsx'
import ServiceDetail from '../components/ServiceDetail.jsx'
import { getService } from '../content/services.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout current="services"><ServiceDetail service={getService('residential-construction')} /></Layout>
  </React.StrictMode>,
)
