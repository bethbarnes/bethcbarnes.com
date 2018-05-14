import React, { Component } from 'react'
import './App.css'
import { Navbar } from './index'
import projectData from './Data.js'


class Projects extends Component {
  render() {
    console.log('data', projectData)
    return (
      <div className="projects">
        <Navbar />
        <div className="inner-white-container gray-border" >
        {projectData.map((project)=> {
          return (
            <div key={project.id}className="project-container gray-border" >
            <div className="project-header">
              <h1 className="project-title">{project.name}</h1>
            </div>
            <div className="proj-desc-container">
              <h1 className="proj-section-title" >Description: </h1>
              <p className="project-description">
                {project.description}
            </p>
            </div>
            <div className="proj-desc-container">
              <h1 className="proj-section-title" >Technologies Used: </h1>
              <p className="project-description">
                {project.technologies}
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
            <div className="proj-links-container" >
            <a className= "test" href={project.github}>
              Github</a>
              <a className= "test" href={project.deployed}>
              Deployed Site</a>
              <a className= "test" href={project.video}>
              Video Presentation</a>
            </div>
          </div>
          )
        })}

        </div>
      </div>
    )
  }
}

export default Projects
