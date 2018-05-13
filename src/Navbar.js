import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export { Home, About } from './index'

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
        <Link className="link-btn" to='/'>
          home
        </Link>
        <Link className="link-btn" to='/about'>
          about
        </Link>
        <Link className="link-btn" to='/projects'>
          projects
        </Link>
        <Link className="link-btn" to='/contact'>
          contact
        </Link>
    </div>
    )
  }
}

export default Navbar
