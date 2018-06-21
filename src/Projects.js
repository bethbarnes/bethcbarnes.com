import React, { Component } from 'react'
import './App.css'
import projectData from './Data.js'


class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projects-inner-white-container" >
        {projectData.map((project)=> {
          return (
            <div key={project.id}className="project-container shadow" >
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
            {project.images ? <div className="proj-images-container">
              {project.images.map((image)=>{
                return (<img
                key={image}
                className="proj-image "
                src={image}
                alt={`${project.name} + ${image}`}/>)
              })}


            </div> : <div></div>}

            <div className="proj-links-container" >
            <a className= "project-links" href={project.github} target="_blank" rel="noopener noreferrer">
              Github</a>
            {project.deployed
              ? <a className= "project-links" href={project.deployed} target="_blank" rel="noopener noreferrer">
              Deployed Site</a>
              : <div></div>}
            {project.video
            ? <a className= "project-links" href={project.video} target="_blank" rel="noopener noreferrer">
              Video Presentation</a>
            : <div></div>}
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
