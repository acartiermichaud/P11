// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Component
import MyRouter from './components/MyRouter'

// Style
import './index.scss'

// Redux
import { Provider } from 'react-redux'
import store from './utils/store'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <MyRouter/>
    </React.StrictMode>
  </Provider>
)