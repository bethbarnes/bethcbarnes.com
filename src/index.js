import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'
import SingleProject from './SingleProject'
import ProjectSlides from './ProjectSlides'

export { Home, About, Projects, Navbar, Contact, SingleProject, ProjectSlides }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


