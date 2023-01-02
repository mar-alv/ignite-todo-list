import './global.css'
import React from 'react'
import { App } from './app'
import { store } from '@store/store'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
