import React, { Component } from 'react';
import './App.css';
// import Link from 'react-router'
// import beth from './beth-photo.jpg'


class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="inner-white-container">
          <h1> Made it to about </h1>
          <img className="desktop-image"
                alt="desktop"
                src="/desktop-image.jpg"/>
        </div>
      </div>
    )
  }
}


export default About;
