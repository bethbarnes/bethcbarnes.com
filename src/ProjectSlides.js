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
  componentDidMount(){
    this.showDivs(this.state.slideIndex);
  }

  componentDidUpdate(){
    this.showDivs(this.state.slideIndex);
  }

  render() {

    let imageData = this.props.imageData
    return (
      <div className="proj-images-container">
      <i class="fas fa-angle-left"
      onClick={() => this.plusDivs(-1)}></i>
        {imageData.map((image) => {
          return (<img
            key={image}
            className={`proj-image slide-${this.props.id}`}
            src={image}
            alt={`${imageData.name} + ${image}`} />)
        })}
        <i class="fas fa-angle-right"
        onClick={() => this.plusDivs(1)}
        ></i>
      </div>
    )
  }
}

export default ProjectSlides
