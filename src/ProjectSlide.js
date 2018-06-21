import React, { Component } from 'react'
import './App.css'


class ProjectSlides extends Component {
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
        <div className="proj-images-container">
          {data.images.map((image)=>{
            return (<img
            key={image}
            className={`proj-image slide-${data.id}`}
            src={image}
            alt={`${data.name} + ${image}`}/>)
          })}
          <button onClick={() => this.plusDivs(-1)}>left</button>
          <button onClick={() => this.plusDivs(1)}>right</button>
        </div>
      )
  }
}

export default ProjectSlides
