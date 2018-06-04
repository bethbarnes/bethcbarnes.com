import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
//TODO: add transition to next pages
//add shadow on hover or transition duration to buttons

//TODO: some sort of fade in with my name and pick and stuff

class Home extends Component {
  constructor(){
    super()

  }

  componentDidMount(){
   /* The speed/duration of the effect in milliseconds */
    console.log('mounted')

    var i = 0;
    var txt = 'Beth Barnes'; /* The text */
    var speed = 150;
    function typeWriter(){
      console.log('helloe')

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
              src='/beth-photo.jpg'
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
          <button className="front-btn">About</button>
        </Link>
        <Link to='./projects'>
          <button className="front-btn">Projects</button>
        </Link>
        <Link to='./contact' >
          <button className="front-btn">Contact</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Home;
