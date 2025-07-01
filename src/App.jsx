import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { RickandmortyPage } from './pages/RickandmortyPage'
import { Route, Router, Routes } from 'react-router-dom'
import { DragonPage } from './pages/DragonPage'
import { Recursos } from './pages/Recursos'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Recursos />} />
        <Route path="/Uso-Api-Rick-and-Morty" element={<RickandmortyPage />} />
        <Route path="/dragon-ball-api" element={<DragonPage />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
