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
const profileURL = 'http://127.0.0.1:8000/api/users/profile/'
const donatsURL = 'http://127.0.0.1:8000/api/donats/'
const getStore = async () => {

    await axios.get(catsURL).then(res=>{
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
  axios.get(profileURL, {
    headers: {
        Authorization: `Token ${token}`
    }
  }).then(res=>{store.user = {...res.data} })
  
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
function renderContent () {
  getStore()
  setTimeout(() => {
    console.log(store.user);
    ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App store = {store}/>
    </BrowserRouter>
    )
  }, 1000)
}
renderContent()
