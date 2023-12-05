import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {store} from './state/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <App store = {store}/>
    </BrowserRouter>
 
)
