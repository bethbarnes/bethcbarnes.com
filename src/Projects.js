import React, { Component } from 'react'
import './App.css'
import projectData from './Data.js'
import { SingleProject } from './index'


class Projects extends Component {

  render() {
    return (
      <div className="projects">
        <div className="projects-inner-white-container" >
          {projectData.map((project) =>
            <SingleProject data={project} key={project.id} />)}
        </div>
      </div>
    )
  }
}

export default Projects
