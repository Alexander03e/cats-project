import { useState, useEffect } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import axios from 'axios'
import { store } from './state/store'
function App(props) {
  const [token, setToken] = useState('')

  const catsURL = 'http://127.0.0.1:8000/api/cats'
  const projectsURL = 'http://127.0.0.1:8000/api/projects'
  const donatsURL = 'http://127.0.0.1:8000/api/donats'

  useEffect(() => {
    const getData = async () => {
      await axios.post('http://127.0.0.1:8000/api/token/', {
        username: 'admin',
        password: 'admin',
      }).then(res=> {
        setToken(res.data['token'])
        localStorage.setItem('token', res.data['token'])
        })
    }

    getData()
  
  },[])
  
  return (
    <>
      <Header />
      <MainRoutes store = {store}/>
      <Footer />
    </>
  )
}

export default App
