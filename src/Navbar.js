import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export { Home, About } from './index'

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
        <Link className="navbar-link" to='/'>
          home
        </Link>
        <Link className="navbar-link" to='/about'>
          about
        </Link>
        <Link className="navbar-link" to='/projects'>
          projects
        </Link>
        <Link className="navbar-link" to='/contact'>
          contact
        </Link>
    </div>
    )
  }
}

export default Navbar
