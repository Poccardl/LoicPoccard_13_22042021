import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './views/App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
