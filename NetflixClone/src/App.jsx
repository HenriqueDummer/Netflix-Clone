import { useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import About from './Pages/About/About'
import Search from './Pages/Search/Search'

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
