import React, { Component } from 'react'
import './App.css'


class ProjectSlides extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slideIndex: 0
    }
  }

  plusDivs = (changeSlideNum) => {
    this.setState({
      slideIndex: this.state.slideIndex + changeSlideNum
    })
  }


  showDivs = (currSlideIndex) => {
    let slides = document.getElementsByClassName(`slide-${this.props.id}`);

    if (currSlideIndex > slides.length - 1) {
      this.setState({ slideIndex: 0 })

    } else if (currSlideIndex < 0) {
      this.setState({ slideIndex: slides.length - 1 })

    } else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.state.slideIndex].style.display = "block";
    }
  }

  render() {
    this.showDivs(this.state.slideIndex);
    let imageData = this.props.imageData
    return (
      <div className="proj-images-container">
        {imageData.map((image) => {
          return (<img
            key={image}
            className={`proj-image slide-${this.props.id}`}
            src={image}
            alt={`${imageData.name} + ${image}`} />)
        })}
        <button onClick={() => this.plusDivs(-1)}>left</button>
        <button onClick={() => this.plusDivs(1)}>right</button>
      </div>
    )
  }
}

export default ProjectSlides
