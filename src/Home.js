import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="name-picture-container">
          <img className="front-page-profile-image"
            src="../public/Beth-Photo-2.jpg"
            alt="beth-profile"

            />
          <h5 className="large-name"> // Beth Barnes </h5>

        </div>
      </div>
    );
  }
}

export default Home;
