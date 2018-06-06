import React, { Component } from 'react'
import './App.css'
import { Home, About, Projects, Contact, Navbar} from './index'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <div className="App">
      <BrowserRouter >
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/about' component={Navbar}/>
          <Route path='/projects' component={Projects} />
          <Route path='/projects' component={Navbar}/>
          <Route path='/contact' component={Contact} />
          <Route path='/contact' component={Navbar}/>
        </div>
      </ BrowserRouter>
      </div>
    );
  }
}

export default App
