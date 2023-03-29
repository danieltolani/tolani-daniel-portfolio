import React from "react";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/layout.css'


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
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="37" fill="none"><path fill="#000" d="M14.9.5H0v3h5.64v12.1h3.59V3.5h5.66v-3h.01ZM24.35 16.1c2.5-.04 4.51-.78 6-2.25 1.5-1.46 2.26-3.4 2.3-5.81-.04-2.41-.8-4.34-2.3-5.81-1.5-1.45-3.5-2.19-6-2.23-2.5.04-4.5.78-5.99 2.25-1.5 1.46-2.26 3.4-2.3 5.81.04 2.41.8 4.34 2.3 5.81 1.49 1.46 3.48 2.21 5.99 2.25v-.02Zm0-3.11c-1.37-.02-2.49-.48-3.38-1.37-.87-.89-1.33-2.08-1.37-3.58.04-1.5.49-2.69 1.37-3.58.89-.89 2.01-1.34 3.38-1.37 1.38.02 2.5.48 3.38 1.37.89.89 1.34 2.08 1.37 3.58-.02 1.5-.48 2.69-1.37 3.58-.87.89-2 1.34-3.38 1.37ZM33.92 15.6H46.2v-3h-8.7V.5h-3.58v15.1ZM60.06 15.6h3.72L57.92.5h-5.03l-5.84 15.1h3.7l.93-2.53h7.44l.93 2.53h.01Zm-7.37-5.25 2.37-6.45h.68l2.37 6.45h-5.43.01ZM66.83 15.6h3.5V5.45h.32l7.1 10.16h4.08V.5h-3.5v10.16h-.34L70.99.5h-4.15v15.1h-.01ZM85.86 15.6h3.58V.5h-3.58v15.1ZM7.03 20.5H.09v15.1h6.94c2.9-.05 4.98-.77 6.24-2.16 1.26-1.4 1.88-3.2 1.85-5.39.02-2.19-.59-3.99-1.85-5.39-1.26-1.39-3.34-2.11-6.24-2.16Zm-.02 12.08H3.67l.04-9.06h3.31c1.47.01 2.59.4 3.36 1.17.77.78 1.15 1.9 1.15 3.36s-.38 2.58-1.15 3.36c-.77.77-1.89 1.16-3.36 1.17h-.01ZM28.93 35.6h3.72l-5.86-15.1h-5.03l-5.84 15.1h3.7l.93-2.53h7.44l.93 2.53h.01Zm-7.37-5.25 2.37-6.45h.68l2.37 6.45h-5.43.01ZM33.64 35.6h3.5V25.44h.32l7.1 10.16h4.08V20.5h-3.5v10.16h-.34L37.79 20.5h-4.15v15.1ZM50.18 35.6h3.58V20.5h-3.58v15.1ZM55.415 35.6h12.71v-2.95h-9.13v-3.33h8.81v-2.59h-8.81v-3.31h9.13v-2.93h-12.71V35.6ZM70.914 35.6h12.28v-3h-8.7V20.5h-3.58v15.1ZM87.51 35.89c.54-.01 1-.2 1.37-.56.36-.36.55-.8.56-1.33-.01-.54-.2-.99-.56-1.35-.37-.36-.83-.55-1.37-.56-.54.01-.99.2-1.35.56-.36.36-.55.81-.56 1.35.01.53.2.97.56 1.33.36.36.81.55 1.35.56Z"/></svg>
        
            <div className='nav-routes-container'>
                <CustomNavLink className='side-bar-link' to='/' >Work</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/About' >About</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/NFTS' >Say Hi</CustomNavLink>
            </div>
        </nav>
      </section>   
    )
}

export default Layout;