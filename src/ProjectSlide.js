import React, { Component } from 'react'
import './App.css'


class ProjectSlide extends Component {
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

//change the name of the id - interpolate some unique data - maybe the id

//need to make this conditional - only do these things if it has images

  showDivs = (currSlideIndex) => {
    console.log('currSlideIndex in showDivs:', currSlideIndex)
    let slides = document.getElementsByClassName(`slide-${this.props.data.id}`);

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
    console.log('PROPS', this.props)
    let data = this.props.data
    return (
        <div key={data.id}
          className="project-container shadow" >
        <div className="project-header">
          <h1 className="project-title">{data.name}</h1>
        </div>
        <div className="proj-desc-container">
          <h1 className="proj-section-title" >Description: </h1>
          <p className="project-description">
            {data.description}
        </p>
        </div>
        <div className="proj-desc-container">
          <h1 className="proj-section-title" >Technologies Used: </h1>
          <p className="project-description">
            {data.technologies}
        </p>
        </div>
        {data.images ? <div className="proj-images-container">
          {data.images.map((image)=>{
            return (<img
            key={image}
            className={`proj-image slide-${data.id}`}
            src={image}
            alt={`${data.name} + ${image}`}/>)
          })}
          <button onClick={() => this.plusDivs(-1)}>left</button>
          <button onClick={() => this.plusDivs(1)}>right</button>
        </div> : <div></div>}

        <div className="proj-links-container" >
        <a className= "project-links" href={data.github} target="_blank" rel="noopener noreferrer">
          Github</a>
        {data.deployed
          ? <a className= "project-links" href={data.deployed} target="_blank" rel="noopener noreferrer">
          Deployed Site</a>
          : <div></div>}
        {data.video
        ? <a className= "project-links" href={data.video} target="_blank" rel="noopener noreferrer">
          Video Presentation</a>
        : <div></div>}
        </div>
      </div>
      )
  }
}

export default ProjectSlide
