import React from "react";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../sass/layout.scss'


const CustomNavLink = ({ to, ...props }) => {
    let activeStyle = {
      backgroundColor: '#101010',
      color: '#CBCCCD',
      padding: 'calc(var(--nav-padding))',
      borderRadius: 'calc(var(--nav-radius) - 0.5rem)'  // Master radius minus padding
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
                <CustomNavLink className='nav-link' to='/' >Home</CustomNavLink>
                <CustomNavLink className='nav-link' to='/work' >Work</CustomNavLink>
                <CustomNavLink className='nav-link' to='/about' >About</CustomNavLink>
                <CustomNavLink className='nav-link' to='/archive' >Archive</CustomNavLink>
        </nav>
      </section>   
    )
}

export default Layout;