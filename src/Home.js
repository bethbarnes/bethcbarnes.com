import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

//TODO: Navbar: make current page remain highlighted
//Projects: make images enlarge
//misc: add credit at the bottom
//Home: change hover color of buttons
class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount(){

    var i = 0;
    var txt = 'Beth Barnes'; /* The text */
    var speed = 150;
  function typeWriter(){
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}


  render() {
    return (
      <div className="home">
        <div className="name-picture-container">
          <div className="name-picture-item">
            <img className="front-page-profile-image gray-border"
              src='/images/beth-photo.jpg'
              alt="beth-profile"
            />
          </div>
          <div className="name-picture-item">
            <h5 id="demo" className="large-name1">
              {'//'} </h5>
          </div>
        </div>
        <div className="btn-container">
        <Link to='./about'>
          <button className="front-btn grow">About</button>
        </Link>
        <Link to='./projects'>
          <button className="front-btn grow">Projects</button>
        </Link>
        <Link to='./contact' >
          <button className="front-btn grow">Contact</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Home;
