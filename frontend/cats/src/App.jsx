import { useState, useEffect } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import axios from 'axios'
import { store } from './state/store'
function App(props) {
  const catsURL = 'http://127.0.0.1:8000/api/cats'
  const projectsURL = 'http://127.0.0.1:8000/api/projects'
  const donatsURL = 'http://127.0.0.1:8000/api/donats'

  useEffect(async () => {
    if (window.localStorage.getItem('token') !== null) {
      await axios
        .get('http://127.0.0.1:8000/api/users/profile/', {
          headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')}`,
          }
        })  
        .then(res => store.user = {...res.data})
    }
  }, [window.localStorage.getItem('token')])
  
  return (
    <>
      <Header store = {store}/>
      <MainRoutes store = {store}/>
      <Footer />
    </>
  )
}

export default App
