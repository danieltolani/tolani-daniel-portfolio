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

        {/* {screenSize > 890 && <svg className="brand-logo-2" xmlns="http://www.w3.org/2000/svg" width="233" height="38" fill="none"><g filter="url(#a)"><path fill="url(#b)" d="M44.897 6.664v30.035h6.449V17.705l7.39 12.733h4.747l7.39-12.733v18.994h6.448V6.664h-6.046L61.2 24.008 51.167 6.664h-6.27Zm36.926 18.825c0 6.768 4.971 11.844 12.092 11.844 4.434 0 9.047-2.072 10.749-6.091l-5.599-1.692c-1.164 1.776-2.866 2.792-5.105 2.792-3.404 0-5.285-2.37-5.777-5.33h16.973V25.53c0-6.769-4.344-11.803-11.554-11.803-7.077 0-11.779 5.415-11.779 11.76Zm11.779-7.192c3 0 4.702 2.115 5.105 4.738H88.272c.538-2.623 2.329-4.738 5.33-4.738Zm13.481-3.934v4.78h4.031V29.55c0 4.822 2.911 7.783 7.927 7.783 1.971 0 3.986-.465 5.688-1.48l-1.12-4.442c-1.075.423-2.15.761-3.314.761-2.194 0-2.911-1.48-2.911-3.341v-9.688h6.449v-4.78h-6.449V6.748h-6.27v7.615h-4.031Zm28.465 22.97c2.687 0 5.553-1.015 6.986-3.257l.179 2.623h5.599V23.162c0-5.838-4.345-9.434-10.256-9.434-4.344 0-9.047 2.2-10.077 6.473l5.598 1.057c.672-1.776 2.463-2.665 4.389-2.665 2.732 0 4.255 1.777 4.255 4.273v1.311c-1.836-.634-3.404-.973-5.374-.973-4.703 0-9.719 2.158-9.719 7.15 0 4.441 4.12 6.98 8.42 6.98Zm-2.239-7.276c0-2.242 2.642-2.876 4.568-2.876.761 0 1.478.084 2.239.211.761.17 1.433.38 2.105.635v.211c0 2.75-2.419 4.527-5.15 4.527-1.747 0-3.762-.804-3.762-2.708Zm19.999-24.916v31.558h5.777l.179-2.92c1.657 2.37 4.345 3.554 7.3 3.554 6.942 0 11.242-5.88 11.242-11.929 0-6.05-4.166-11.676-10.883-11.676-2.956 0-5.554 1.227-7.345 3.47V5.14h-6.27Zm12.137 13.917c3.807 0 5.956 3.173 5.956 6.473 0 3.342-2.239 6.472-5.956 6.472-3.762 0-5.957-3.215-5.957-6.472 0-3.342 2.24-6.473 5.957-6.473Zm16.466-4.695v22.336h6.27V23.88c0-2.75 1.926-4.823 4.837-4.823 3.09 0 4.21 2.412 4.21 4.992V36.7h6.27v-13.41c0-5.203-2.822-9.56-8.644-9.56-2.866 0-5.509 1.142-6.987 3.51l-.179-2.876h-5.777Zm26.591-9.222v31.558h5.778l.179-2.92c1.657 2.37 4.344 3.554 7.3 3.554 6.941 0 11.241-5.88 11.241-11.929 0-6.05-4.165-11.676-10.883-11.676-2.956 0-5.553 1.227-7.345 3.47V5.14h-6.27Zm12.137 13.917c3.807 0 5.956 3.173 5.956 6.473 0 3.342-2.239 6.472-5.956 6.472-3.762 0-5.956-3.215-5.956-6.472 0-3.342 2.239-6.473 5.956-6.473Z"/><path fill="url(#c)" d="M22.393 6.632h-2.8v1.322h2.8V6.632Z"/><path fill="url(#d)" d="M24.492 9.276h-6.998v1.322h6.998V9.276Z"/><path fill="url(#e)" d="M9.097 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#f)" d="M11.896 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#g)" d="M14.695 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#h)" d="M17.494 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#i)" d="M20.293 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#j)" d="M23.092 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#k)" d="M25.891 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#l)" d="M28.69 18.53h-1.399v1.322h1.4V18.53Z"/><path fill="url(#m)" d="M31.49 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#n)" d="M34.289 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#o)" d="M15.395 27.783h-1.4v1.322h1.4v-1.322Z"/><path fill="url(#p)" d="M22.393 23.157v7.931c0 .397.28.661.7.661h9.796c.42 0 .7-.264.7-.66v-7.932c0-.397-.28-.661-.7-.661h-9.797c-.42 0-.7.265-.7.66Zm1.4 4.627h3.498v2.643h-3.499v-2.643Zm4.898 2.643v-2.643h3.498v2.643h-3.498Zm3.498-3.965h-3.498v-2.644h3.498v2.643Zm-4.898-2.644v2.643h-3.499v-2.643h3.499Z"/><path fill="url(#q)" d="M39.187 35.715v-1.983c0-.396-.28-.66-.7-.66h-1.4V17.207h2.1c.42 0 .7-.265.7-.661V14.1a.59.59 0 0 0-.28-.529l-5.318-3.701V2.005c0-.396-.28-.66-.7-.66H27.99c-.42 0-.7.264-.7.66v2.908L21.413.815c-.28-.198-.56-.198-.84 0L2.87 13.242H2.8v.066l-.42.264a.59.59 0 0 0-.28.53v2.445c0 .396.28.66.7.66h2.1v15.864h-1.4c-.42 0-.7.265-.7.661v1.983H0v1.322h41.987v-1.322h-2.8ZM32.89 2.666v.661H28.69v-.66h4.2ZM28.69 4.65h4.2v4.23l-4.2-2.974V4.649ZM3.5 14.564h27.99v-1.322H5.18L20.992 2.138l17.494 12.294v1.454H3.498v-1.322Zm2.799 2.644h29.39V33.07H18.194v-9.253h1.4v-1.322H7.696v1.322h1.4v9.253h-2.8V17.208Zm4.198 6.61h6.298v9.253h-6.298v-9.253ZM4.2 35.715v-1.322h33.589v1.322H4.197Z"/></g><defs><linearGradient id="b" x1="79.587" x2="192.672" y1="8.575" y2="25.566" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="c" x1="20.11" x2="21.826" y1="6.773" y2="6.867" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="d" x1="18.785" x2="23.008" y1="9.417" y2="9.992" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="e" x1="7.955" x2="8.815" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="f" x1="10.755" x2="11.614" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="g" x1="13.553" x2="14.413" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="h" x1="16.353" x2="17.213" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="i" x1="19.152" x2="20.011" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="j" x1="21.951" x2="22.811" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="k" x1="24.75" x2="25.61" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="l" x1="27.549" x2="28.409" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="m" x1="30.348" x2="31.208" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="n" x1="33.147" x2="34.007" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="o" x1="14.254" x2="15.113" y1="27.924" y2="27.948" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="p" x1="24.457" x2="31.334" y1="23.483" y2="23.697" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="q" x1="7.743" x2="33.532" y1="4.546" y2="5.312" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><filter id="a" width="237" height="40.667" x="0" y=".667" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="22"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_1718_820"/></filter></defs></svg>} */}
        {screenSize <= 890 && <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" fill="none"><path fill="#000" d="M.167.26v3.58H28.62V.26H.167ZM.167 9.84v3.58H28.62V9.84H.167ZM.167 19.42V23H28.62v-3.58H.167Z"/></svg>}


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