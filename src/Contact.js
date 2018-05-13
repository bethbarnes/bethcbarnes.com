import React, { Component } from 'react'
import './App.css'
import { Navbar } from './index'

class Contact extends Component{
  render(){
    return (
      <div className="contact">
        <Navbar />
          <div className="inner-white-container gray-border">
            <h1> Contact</h1>
          </div>
      </div>
    )
  }
}

export default Contact
