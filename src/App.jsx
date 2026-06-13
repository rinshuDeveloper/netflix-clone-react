import { useState } from 'react'
import react from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Movies from './Components/Movies/Movies'

function App() {
 

  return (
    <div>
      <Header/>
      <Banner/>
      <Movies title="Trending now" />
      <Movies title="Actions" isSmall />
    </div>
  )
}

export default App
