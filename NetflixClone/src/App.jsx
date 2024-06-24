import { useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Search from './Pages/Search'

// Components
import { Navbar } from './Components/Navbar'
import ShowsDisplay from './Pages/ShowsDisplay'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows/:showFormat' element={<ShowsDisplay />} />
          <Route path='/about/:id' element={<About />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
