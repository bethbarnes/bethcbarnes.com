import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import About from './About.js'

//TODO: add transition to next pages

//TODO: some sort of fade in with my name and pick and stuff

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="name-picture-container">
          <div className="name-picture-item">
            <img className="front-page-profile-image"
              src='/beth-photo.jpg'
              alt="beth-profile"
            />
          </div>
          <div className="name-picture-item">
            <h5 className="large-name">
              {'// Beth Barnes'} </h5>
          </div>
        </div>
        <div className="btn-container">
        <Link to='./about'>
          <button className="front-btn">
          About</button>
        </Link>
          <button className="front-btn">Projects</button>
          <button className="front-btn">Contact</button>
        </div>
      </div>
    );
  }
}

export default Home;
