import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {store} from './state/store'
import axios from 'axios'


const token = localStorage.getItem('token')
const catsURL = 'http://127.0.0.1:8000/api/cats/'
const projectsURL = 'http://127.0.0.1:8000/api/projects/'
const donatsURL = 'http://127.0.0.1:8000/api/donats/'
const getStore = async () => {
  axios.get(catsURL, {
    headers: {
        Authorization: `Token ${token}`
    }
  }).then(res=>{
    console.log(res.data)
  res.data.map(cat => {
    store.cats.push(cat)            
  })
  console.log(store.cats)
  })
  axios.get(projectsURL, {
    headers: {
        Authorization: `Token ${token}`
    }
  }).then(res=>{
  res.data.map(project => {
    store.projects.push(project)
  })
  console.log(store.projects)
  })
  // axios.get(donatsURL, {
  // headers: {
  //   Authorization: `Token ${token}`
  // }
  // }).then(res=>{
  // res.data.map(don => {
  //   console.log(don)
  //   // store.donats.push(don)
  // })
  // })
}
getStore()
function renderContent () {
  setTimeout(() => {
    ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App store = {store}/>
    </BrowserRouter>
    )
  }, 1500)
}

renderContent()

