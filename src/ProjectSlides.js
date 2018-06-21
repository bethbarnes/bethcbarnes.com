import React, { Component } from 'react'
import './App.css'


class ProjectSlides extends Component {
  constructor(props){
    super(props)

    this.state = {
      slideIndex: 0
    }
  }


  plusDivs = (changeSlideNum) => {

    this.setState({
      slideIndex: this.state.slideIndex + changeSlideNum
    })
    console.log('this is new slide', this.state.slideIndex)
    this.showDivs(this.state.slideIndex)
  }

//needt o make it so it goes through all images

  showDivs = (currSlideIndex) => {
    console.log(`currSlideIndex in showDivsof :${this.props.id}`, currSlideIndex)
    let slides = document.getElementsByClassName(`slide-${this.props.id}`);
    console.log('slides: ', slides)
    console.log('length', slides.length)

    if (currSlideIndex > slides.length-1) {
      console.log('slideIndex greater than length')
      this.setState({slideIndex: 0})
    }else if (currSlideIndex < 0) {
      this.setState({slideIndex: slides.length-1})
    }else {
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[this.state.slideIndex].style.display = "block";
  }
  }

  componentDidMount(){

    this.showDivs(this.state.slideIndex);
  }

  render() {
    console.log(`STATE IN ${this.props.id}`, this.state)
    let imageData = this.props.imageData
    return (
        <div className="proj-images-container">
          {imageData.map((image)=>{
            return (<img
            key={image}
            className={`proj-image slide-${this.props.id}`}
            src={image}
            alt={`${imageData.name} + ${image}`}/>)
          })}
          <button onClick={() => this.plusDivs(-1)}>left</button>
          <button onClick={() => this.plusDivs(1)}>right</button>
        </div>
      )
  }
}

export default ProjectSlides
