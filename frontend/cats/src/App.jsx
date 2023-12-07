import { useState, useEffect } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import axios from 'axios'
import { store } from './state/store'
function App(props) {

  // useEffect(()=>{
  //   axios.post('http://127.0.0.1:8000/api/token/', {
  //     username: 'admin',
  //     password: 'admin'
  //   })
  //   .then(res => {
  //     console.log(res.data)
  //     localStorage.setItem('token', res.data['token'])
  //   })
  // })
  return (
    <>
      <Header store = {store}/>
      <MainRoutes store = {store}/>
      <Footer />
    </>
  )
}

export default App
