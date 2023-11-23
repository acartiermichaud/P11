// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Component
import MyRouter from './components/MyRouter'

// Style
import './index.scss'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRouter/>
    </Provider>
  </React.StrictMode>
)