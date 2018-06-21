import React, { Component } from 'react'
import './App.css'
import projectData from './Data.js'


class Projects extends Component {
  constructor(props){
    super(props)

    this.state = {
      slideIndex: 1
    }
  }


  plusDivs = (changeSlideNum) => {
    console.log('this is n', changeSlideNum)
    this.setState({
      slideIndex: this.state.slideIndex + changeSlideNum
    })
    this.showDivs(this.state.slideIndex)
  }

  showDivs = (currSlideIndex) => {
    console.log('currSlideIndex in showDivs:', currSlideIndex)
    let slides = document.getElementsByClassName("slide");

    console.log('length', slides.length)
    if (currSlideIndex > slides.length) {
      console.log('slideIndex greater than length')
      this.setState({slideIndex: 1})
    }
    if (currSlideIndex < 1) {
      this.setState({slideIndex: slides.length})
    }
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[this.state.slideIndex-1].style.display = "block";
  }

  componentDidMount(){

    this.showDivs(this.state.slideIndex);
  }

  render() {
    console.log('STATE', this.state)
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
                className="proj-image slide"
                src={image}
                alt={`${project.name} + ${image}`}/>)
              })}
              <button onClick={() => this.plusDivs(-1)}>left</button>
              <button onClick={() => this.plusDivs(1)}>right</button>
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
