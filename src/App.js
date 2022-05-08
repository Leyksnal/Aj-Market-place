import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ContentDetail from './components/Services/ContentDetail'
import Market from './components/Services/Market'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/card'} element={<Market/>}/>
        <Route path={'/detail'} element={<ContentDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}