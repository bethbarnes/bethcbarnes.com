import React, { Component } from 'react'
import './App.css'
import { Navbar } from './index'

class Projects extends Component{
  render(){
    return (
      <div className="projects">
        <Navbar />
        <div className="inner-white-container gray-border" >
          <h1> Projects</h1>
        </div>
      </div>
    )
  }
}

export default Projects
