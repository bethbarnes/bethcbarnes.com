import React, { Component } from 'react'
import './App.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-container">
          <h1 className="contact-text" >CONTACT</h1>
          <div className="icon-container">
            <a href="https://github.com/bethbarnes" >
              <i className="fa fa-github small-icon"></i>
            </a>
            <a href= "https://www.linkedin.com/in/bethcbarnes/" >
              <i className="fa fa-linkedin-square small-icon"></i>
            </a>
            <a href= "https://www.linkedin.com/in/bethcbarnes/" >
              <i className="fab fa-medium-m small-icon"></i>
            </a>
          </div>
        </div>
      <div className="contact-container" >
        <div className="contact-info-container" >
          <h4 className="contact-types"> EMAIL: </h4>
          <h3> bethcbarnes@outlook.com </h3>
        </div>
        <div className="contact-info-container" >
          <h4 className="contact-types"> PHONE: </h4>
          <h3>315.520.4376</h3>
        </div>
      </div>
      </div>
    )
  }
}

export default Contact
