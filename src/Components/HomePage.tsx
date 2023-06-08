import React from 'react'
import { Navbar } from './Widget'

const avatar = require('./img/julien.png')

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div id='Home'/>
      <section className="home">
        <h1>Hello, I'm Julien</h1>
        <p> My name is Julien, I'm a self-taught web developer based in Belgium and I'm soon turning 21 (on May 3rd).
            I'm passionate about coding and have created several web projects such as CryptoExtension, a browser extension for tracking cryptocurrency prices, and ForexConverter, an online currency converter.
            Besides my personal projects, I have worked on development projects for Minecraft servers using Java. Outside of work, I enjoy spending time with friends and soaking up the sun.
        </p>
        <img src={avatar} alt="" />
      </section>
      
    </>
  )
}

export default HomePage
