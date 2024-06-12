import { useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import About from './Pages/About'
import Search from './Pages/Search'

// Components
import { Navbar } from './Components/Navbar'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/about/:id' element={<About />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
