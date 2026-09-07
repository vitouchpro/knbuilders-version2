import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Layout from '../components/Layout.jsx'
import Article from '../components/Article.jsx'
import { getPost } from '../content/posts.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout current="blog"><Article post={getPost('technology-modern-construction')} /></Layout>
  </React.StrictMode>,
)
