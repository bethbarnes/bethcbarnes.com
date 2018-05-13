import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export { Home, About } from './index'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      <Link to='/'>
      <button>Home</button>
      </Link>
      <button>About</button>
      <button>Portfolio</button>
      <button>Contact</button>
      </div>
    )
  }
}

export default Navbar
