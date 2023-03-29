import React from "react";
import Gifs from "./gifs";
import '../styles/work.css'

const Work = () => {
    return(
        <main className="work-section">
            <Gifs/>
            <section className="text-section">
                <h1>Hi there! <img alt="random-gif-1" className="gif" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJmMTg5YWI0Y2E2Njk4YWJjMWJmMDRiOWYwMDE4OTQzYmU0ZmNkZSZjdD1z/eefgfYirNy97bWckLj/giphy.gif"/> </h1>
                <p>I developed this site myself to showcase my work. A larger portfolio is coming soon with more projects. </p>
            </section>
            <section className="footer-section">
                <p><a href="mailto:tolanidaniel02@gmail.com" style={{ color: '#2E3840', textDecoration: 'underline' }}>Contact me</a><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1NTlmY2E4ODk2MDcxNWVhNjg3ZGI4YTA5ZTQ3MWEwYWQyZTQ0MCZjdD1z/L3gknvclvOxoP1jWlm/giphy.gif"/>if you have any questions or would like to discuss potential collaboration opportunities.</p>
            </section>
        </main>
    )
}

export default Work;


