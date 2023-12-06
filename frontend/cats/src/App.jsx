import { useState, useEffect } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import axios from 'axios'
import { store } from './state/store'
function App(props) {
  return (
    <>
      <Header store = {store}/>
      <MainRoutes store = {store}/>
      <Footer />
    </>
  )
}

export default App
