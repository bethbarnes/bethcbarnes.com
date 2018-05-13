import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export { Home, About } from './index'

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <div className="nav-link">
        <Link className="link" to='/'>
          home
        </Link>
      </div>
      <div className="nav-link">
        <Link to='/about'>
          about
        </Link>
      </div>
      <div className="nav-link">
        <Link to='/portfolio'>
          portfolio
        </Link>
      </div>
      <div className="nav-link">
        <Link to='/contact'>
          contact
        </Link>
      </div>
    </div>
    )
  }
}

export default Navbar
