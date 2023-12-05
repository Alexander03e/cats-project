import { useState, useEffect } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import axios from 'axios'
import { store } from './state/store'
function App(props) {
  const [token, setToken] = useState('')
  localStorage.setItem('token', token)
  useEffect(() => {
    const getData = async () => {
        await axios.post('http://127.0.0.1:8000/api/token/', {
          username: 'admin',
          password: 'admin',
        }).then(res=> {
          setToken(res.data['token'])
          console.log(token)
        })
        axios.get('http://127.0.0.1:8000/api/cats', {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then(res=>{
          res.data.map(cat => {
            store.cats.push(cat)
            
          })
         
          console.log(store.cats)
        })
        axios.get('http://127.0.0.1:8000/api/projects', {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then(res=>{
          res.data.map(project => {
            store.projects.push(project)
          })
          console.log(store.projects)
        })
        axios.get('http://127.0.0.1:8000/api/donats', {
          headers: {
            Authorization: `Token ${token}`
          }
        }).then(res=>{
          res.data.map(don => {
            store.donats.push({don})
          })
          console.log(don)
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
