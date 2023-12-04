import { useState } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'

function App() {

  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App
