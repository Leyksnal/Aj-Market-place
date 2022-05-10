import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ContentDetail from './components/Services/ContentDetail'
import Market from './components/Services/Market'
import User from './components/User/User'
import UserContent from './components/User/UserContent'
import Counter from './CounterComp/CounterPhase/Counter'
import { GlobalState } from './CounterComp/CounterState/CounterState'

export default function App() {
  return (
    <GlobalState>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/card'} element={<Market/>}/>
        <Route path={'/detail'} element={<ContentDetail/>}/>
        <Route path={'/user'} element={<User/>}/>
        <Route path={'/usercontents'} element={<UserContent/>}/>
        <Route path={'/counter'} element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalState>
  )
}