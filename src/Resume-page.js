import React, { Component } from 'react';

class ResumePage extends Component {
  render () {
    return (
      <div>
        <span> Resume </span>
          <iframe src="/resume.pdf" width="600" height="750" title="resume"></iframe>
      </div>
    )
  }
}

export default ResumePage;
