import React, { Component } from 'react';
import './App.css';
// import beth from './beth-photo.jpg'

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
          <button className="front-btn">About</button>
          <button className="front-btn">Projects</button>
          <button className="front-btn">Contact</button>
        </div>
      </div>
    );
  }
}

export default Home;
