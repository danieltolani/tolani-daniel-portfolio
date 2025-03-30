import React from "react";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../sass/layout.scss'


const CustomNavLink = ({ to, ...props }) => {
    let activeStyle = {
      textDecoration: 'underline',
      color: '#444444',
    };
  
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: 'none' }
        }
        to={to}
        end
        {...props}
      />
    );
  };


const Layout = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  }, [screenSize]);



    return (
      <section className="nav-section">
        <nav className="nav-links">

            <div className='nav-routes-container'>
                <CustomNavLink className='side-bar-link' to='/' >Home</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/About' >About</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/NFTS' >Work</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/NFTS' >Archive</CustomNavLink>
            </div>
        </nav>
      </section>   
    )
}

export default Layout;