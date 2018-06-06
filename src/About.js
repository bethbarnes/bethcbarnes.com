import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="inner-white-container gray-border">
          <h2 className="about-header"> {'// Hello World'} </h2>
          <img className="desktop-image gray-border shadow"
                alt="desktop"
                src="/images/desktop-image.jpg"/>
          <p className="about-me-text gray-border">
          A little bit about me: I'm a Javascript developer, cat person and foreign language enthusiast! My interest in tech began when I was in Beijing, studying Mandarin Chinese and had an amazing internship at an iOS app start-up. From there, I worked in sales at a software company and then learned Javascript at Fullstack Academy of Code. I'm most experienced with Javascript, Node.js, React, Redux and Express, but I love experimenting with new technologies like React Native, Google Firebase and ViroReact.
        <br/>
        <br/>
        In my free time, I like to get involved in the tech community, volunteering or attending events from organizations like Girl Develop it and React NYC. I'm also a co-organizer of HackerNest's monthly Tech Socials, which is part of HackerNest's mission to promote tech communities across the world.  If you'd like to get in touch, feel free to contact me!
        <br/>
        <br/>
        I'm currently a Teaching Fellow and Engineer at Fullstack Academy, and I'm looking for new opportunities in softare engineering (<a className="resume-link" href="/resume.pdf" target="blank" >resume</a>)
        <br/>
        <br/>
          - Beth 
          </p>
        </div>
      </div>
    )
  }
}


export default About;
