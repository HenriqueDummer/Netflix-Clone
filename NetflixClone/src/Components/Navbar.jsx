import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    <>
        <nav>
            <div className="img_container">
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" style={{width: '50px'}} alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <NavLink to={'/home'}>
                            <i className='bi bi-search'></i> 
                            <p>Search</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/home'}>
                            <i className='bi bi-house'></i> 
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/home'}>
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
