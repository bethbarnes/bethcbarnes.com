import React, { Component } from 'react';
import './App.css';
// import beth from './beth-photo.jpg'

class Home extends Component {
  render() {
    return (
      <div className="App">
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
          <button className="btn">About</button>
          <button className="btn">Projects</button>
          <button className="btn">Contact</button>
        </div>
      </div>
    );
  }
}

export default Home;
