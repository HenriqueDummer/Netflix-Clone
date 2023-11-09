import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    <>
        <div className="nav_btn">
            <i class="bi bi-list"></i>
        </div>
        <nav className='navbar'>
            <div className="img_container">
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" style={{width: '50px'}} alt="" />
            </div>
            <div className="nav_links_container">
                    <ul>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? 'active' : '')} to={'/search'}>
                                <i className='bi bi-search'></i> 
                                <p>Search</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? 'active' : '')} to={'/'}>
                                <i className='bi bi-house'></i> 
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movies'}>
                                <i className='bi bi-film'></i> 
                                <p>Movies</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/series'}>
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
