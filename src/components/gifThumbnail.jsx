import React from "react";
import { Link } from "react-router-dom";
import '../styles/gifs-thumbnail.css'

const GifThumbnail = (props) => {
    return(
        <section className="thumbnail-section">
        <div className="thumbnail">
          {/* <div className="card--star">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#D7D7D7" stroke="url(#a)" d="m11.6 5.63.4.535.4-.535a5.049 5.049 0 0 1 4.04-2.03c2.791 0 5.06 2.274 5.06 5.09 0 1.136-.181 2.184-.496 3.156v.003c-.755 2.387-2.3 4.31-3.969 5.744-1.67 1.436-3.435 2.355-4.576 2.744l-.005.002A1.47 1.47 0 0 1 12 20.4a1.47 1.47 0 0 1-.454-.061l-.005-.002c-1.141-.389-2.906-1.308-4.576-2.744-1.669-1.433-3.214-3.357-3.968-5.744l-.001-.003A10.179 10.179 0 0 1 2.5 8.69c0-2.816 2.268-5.09 5.06-5.09 1.645 0 3.12.8 4.04 2.03Z"/><defs><linearGradient id="a" x1="12" x2="12" y1="20.9" y2="3.1" gradientUnits="userSpaceOnUse"><stop stop-color="#1D0E3D"/><stop offset="1" stop-color="#0F051D"/></linearGradient></defs></svg> 
          </div> */}
          <img className="gif" alt={props.alt} src={props.source} />
          <div className="card-details">
            <div className="card-row-1">
              {/* <h1>{props.cardTitle}</h1> */}

              <a className="card-rating" href={props.url}>
                PREVIEW
              </a>
              {/* <p>{props.amount}</p> */}
            </div>

            {/* <div className="card-row-2">
              <h1>{props.distance}</h1>
              <p>{props.availability}</p>
            </div> */}

            {/* <div className="card-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="url(#paint0_linear_1788_979)" d="M5.125 1.584a1 1 0 0 1 1.75 0l.782 1.414a1 1 0 0 0 .686.499l1.587.306a1 1 0 0 1 .54 1.665l-1.103 1.18a1 1 0 0 0-.262.806l.199 1.604a1 1 0 0 1-1.416 1.03l-1.464-.686a1 1 0 0 0-.848 0l-1.464.685a1 1 0 0 1-1.416-1.029l.2-1.604a1 1 0 0 0-.263-.806L1.53 5.468a1 1 0 0 1 .54-1.665l1.587-.306a1 1 0 0 0 .686-.499l.782-1.414Z"/><defs><linearGradient id="paint0_linear_1788_979" x1="1.374" x2="11.516" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#A02279"/><stop stop-color="#A02279"/></linearGradient></defs></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="url(#paint0_linear_1788_979)" d="M5.125 1.584a1 1 0 0 1 1.75 0l.782 1.414a1 1 0 0 0 .686.499l1.587.306a1 1 0 0 1 .54 1.665l-1.103 1.18a1 1 0 0 0-.262.806l.199 1.604a1 1 0 0 1-1.416 1.03l-1.464-.686a1 1 0 0 0-.848 0l-1.464.685a1 1 0 0 1-1.416-1.029l.2-1.604a1 1 0 0 0-.263-.806L1.53 5.468a1 1 0 0 1 .54-1.665l1.587-.306a1 1 0 0 0 .686-.499l.782-1.414Z"/><defs><linearGradient id="paint0_linear_1788_979" x1="1.374" x2="11.516" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#A02279"/><stop stop-color="#A02279"/></linearGradient></defs></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="url(#paint0_linear_1788_979)" d="M5.125 1.584a1 1 0 0 1 1.75 0l.782 1.414a1 1 0 0 0 .686.499l1.587.306a1 1 0 0 1 .54 1.665l-1.103 1.18a1 1 0 0 0-.262.806l.199 1.604a1 1 0 0 1-1.416 1.03l-1.464-.686a1 1 0 0 0-.848 0l-1.464.685a1 1 0 0 1-1.416-1.029l.2-1.604a1 1 0 0 0-.263-.806L1.53 5.468a1 1 0 0 1 .54-1.665l1.587-.306a1 1 0 0 0 .686-.499l.782-1.414Z"/><defs><linearGradient id="paint0_linear_1788_979" x1="1.374" x2="11.516" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#A02279"/><stop stop-color="#A02279"/></linearGradient></defs></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="url(#paint0_linear_1788_979)" d="M5.125 1.584a1 1 0 0 1 1.75 0l.782 1.414a1 1 0 0 0 .686.499l1.587.306a1 1 0 0 1 .54 1.665l-1.103 1.18a1 1 0 0 0-.262.806l.199 1.604a1 1 0 0 1-1.416 1.03l-1.464-.686a1 1 0 0 0-.848 0l-1.464.685a1 1 0 0 1-1.416-1.029l.2-1.604a1 1 0 0 0-.263-.806L1.53 5.468a1 1 0 0 1 .54-1.665l1.587-.306a1 1 0 0 0 .686-.499l.782-1.414Z"/><defs><linearGradient id="paint0_linear_1788_979" x1="1.374" x2="11.516" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#A02279"/><stop stop-color="#A02279"/></linearGradient></defs></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="url(#paint0_linear_1788_979)" d="M5.125 1.584a1 1 0 0 1 1.75 0l.782 1.414a1 1 0 0 0 .686.499l1.587.306a1 1 0 0 1 .54 1.665l-1.103 1.18a1 1 0 0 0-.262.806l.199 1.604a1 1 0 0 1-1.416 1.03l-1.464-.686a1 1 0 0 0-.848 0l-1.464.685a1 1 0 0 1-1.416-1.029l.2-1.604a1 1 0 0 0-.263-.806L1.53 5.468a1 1 0 0 1 .54-1.665l1.587-.306a1 1 0 0 0 .686-.499l.782-1.414Z"/><defs><linearGradient id="paint0_linear_1788_979" x1="1.374" x2="11.516" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#A02279"/><stop stop-color="#A02279"/></linearGradient></defs></svg>
            </div> */}
            
          </div>
        </div>
        </section>
    )
}

export default GifThumbnail;