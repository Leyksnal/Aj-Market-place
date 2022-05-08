import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Market from './components/Services/Market'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/card'} element={<Market/>}/>
      </Routes>
    </BrowserRouter>
  )
}