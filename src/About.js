import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
// import Link from 'react-router'
// import beth from './beth-photo.jpg'



class About extends Component {
  render() {
    return (
      <div className="About">
      <Navbar />
        <div className="inner-white-container gray-border">
          <h2 className="about-header"> {'// Hello World'} </h2>
          <img className="desktop-image"
                alt="desktop"
                src="/desktop-image.jpg"/>
          <p className="about-me-text gray-border">
          A little bit about me: I'm an aspiring developer, cat person and language enthusiast, originally from Upstate New York and currently living in NYC. I  graduated from Hamilton College, where I studied Mandarin Chinese and Economics and had the amazing opportunity to live in Beijing for eight months and travel through Southeast Asia, practicing my Chinese and meeting tons of great people.
        <br/>
        <br/>
          Now I live in NYC and my newest challenge is learning to code! I started by teaching myself basic HTML, CSS and Javascript online, and now I've taken the leap of joining Fullstack Academy's Software Engineering Immersive. I'm super excited and I'll be documenting my journey on my blog - please subscribe and feel free to reach out with any questions, comments, or advice. Thanks!
        <br/>
        <br/>
          -Beth 
          </p>
        </div>
      </div>
    )
  }
}


export default About;
