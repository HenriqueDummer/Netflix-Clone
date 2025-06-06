import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export const Navbar = () => {

    const windowSize = window.innerWidth
    const [navVisible, setNavVisible] = useState(false)

    const handleClick = () => {
        setNavVisible(prev => !prev)
        console.log(navVisible)
    }

  return (
    <>
        <button onClick={() => handleClick()} className="nav_btn">
            {navVisible ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
        </button>
        <nav className={`navbar ${navVisible ? '' : 'hidden'}`}>
            <div className="img_container">
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" style={{width: '50px'}} alt="" />
            </div>
            <div className="nav_links_container">
                    <ul>
                        <li>
                            <NavLink onClick={() => setNavVisible(false)} className={`nav_link ${({isActive}) => (isActive ? 'active' : '')}`} to={'/search'}>
                                <i className='bi bi-search'></i> 
                                <p>Search</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavVisible(false)} className={`nav_link ${({isActive}) => (isActive ? 'active' : '')}`} to={'/'}>
                                <i className='bi bi-house'></i> 
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavVisible(false)} className={`nav_link ${({isActive}) => (isActive ? 'active' : '')}`} to={'/movies/28'}>
                                <i className='bi bi-film'></i> 
                                <p>Movies</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setNavVisible(false)} className={`nav_link ${({isActive}) => (isActive ? 'active' : '')}`} to={'/tv_show/10759'}>
                                <i className='bi bi-tv'></i> 
                                <p>Series</p>
                            </NavLink>
                        </li>
                    </ul>
            </div>
        </nav>
    </>
  )
}
