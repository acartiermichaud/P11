// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Component
import MyRouter from './components/MyRouter'

// Style
import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>
)