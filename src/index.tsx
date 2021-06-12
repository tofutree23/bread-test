import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SnackbarProvider } from 'notistack'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <SnackbarProvider dense>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SnackbarProvider>,
  document.getElementById('root')
)

require('dotenv').config()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
