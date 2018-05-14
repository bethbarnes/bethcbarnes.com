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
        <i class="fa fa-car"></i>

      </div>
    )
  }
}

export default Contact
