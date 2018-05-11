import React, { Component } from 'react';
import './App.css';
// import beth from './beth-photo.jpg'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="name-picture-container">
        <div>
          <img className="front-page-profile-image"
            src='/beth-photo.jpg'
            alt="beth-profile"
            />
            </div>
            <div>
          <h5 className="large-name"> // Beth Barnes </h5>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
