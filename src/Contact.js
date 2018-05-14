import React, { Component } from 'react'
import './App.css'
import { Navbar } from './index'

class Contact extends Component{
  render(){
    return (
      <div className="contact">
        <h1 className="contact-text" >CONTACT</h1>
        <h4> EMAIL: </h4>
        <h4> RESUME: </h4>
        <div className="icon-container">
        <a href="https://github.com/bethbarnes" >
          <i class="fa fa-github small-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/bethcbarnes/" >
          <i class="fa fa-linkedin-square small-icon"></i>
        </a>
        </div>
      </div>
    )
  }
}

export default Contact
