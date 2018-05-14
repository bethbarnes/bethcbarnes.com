import React, { Component } from 'react'
import './App.css'
import { Navbar } from './index'

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Navbar />
        <div className="inner-white-container gray-border" >
          <div className="project-container gray-border" >
            <div className="project-header">
              <h1 className="project-title" >Project Name</h1>
            </div>
            <div className="proj-desc-container">
              <h1>Description: </h1>
              <p className="project-description">
                The Network is a professional networking website that I built with a group as our Capstone project for Fullstack Academy. The Network is a Progressive Web App created using mobile-first responsive design, and styled with Semantic UI and CSS. The Network’s frontend was built using modular React components and React-Redux. It's integrated with multiple APIs such as Google Maps, Google Places, and React Big Calendar. Data is stored using Google Cloud Firestore which enables a flexible, scalable, and real-time database.
            </p>
            </div>
            <div className="proj-desc-container">
              <h1>Technologies Used: </h1>
              <p className="project-description">
                Cloud Firestore, Mobile-First Design, React-Redux, Google Maps API, Semantic UI
            </p>
            </div>
            <div className="proj-images-container">
              <img className="proj-image gray-border"
                src='/network-alumni.png'
                alt='network alumni'/>
              <img className="proj-image gray-border"
                src='/network-map.png'
                alt='network alumni'/>
              <img className="proj-image gray-border"
                src='/network-feed.png'
                alt='network alumni'/>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Projects
