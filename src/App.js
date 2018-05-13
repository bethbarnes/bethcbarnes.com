import React, { Component } from 'react'
import './App.css'
import { Home } from './index'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
        </div>
      </ BrowserRouter>
      </div>
    );
  }
}

export default App;
