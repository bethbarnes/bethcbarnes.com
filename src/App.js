import React, { Component } from 'react'
import './App.css'
import { Home, About, Projects, Contact } from './index'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </ BrowserRouter>
      </div>
    );
  }
}

export default App
