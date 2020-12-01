import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical';
import TextLoop from 'react-text-loop';
import Experience from './Experience/Experience';
import {Link} from 'react-scroll';
import glamlex from './Demos/glamlex.mp4';
import taskmaster from './Demos/taskmaster.mp4';
import traveler from './Demos/traveler.mp4';
import christmas from './Demos/christmascountdown.mp4';

class App extends Component {


  state = { 
    projects: [
     { name: 'Glamlex', link: 'https://github.com/proiacm/Glamlex', vid: glamlex , desc: 'React SPA freelance project blueprint for a future salon owner.'},
     { name: 'Taskmaster', link:'https://github.com/proiacm/Taskmaster', vid: taskmaster, desc: 'Ruby todo app using MVC/CRUD with user functionality.'},
     { name: 'Traveler', link: 'https://github.com/proiacm/traveler', vid: traveler, desc: 'JavaScript trip tracker with Rails API backend.'},
     { name: 'Christmas', link: 'https://github.com/proiacm/Christmas', vid: christmas, desc: 'JavaScript and React countdown to the best day of the year!'}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} link={project.link} video={project.vid} desc={project.desc} />
      })}
    </div>

    return (
      <div className="App">
        <Nav animatedText={<Typical className='animated-text' steps={['Hi, I\'m CiaraMaria!', 1000]}
        loop={1}
        wrapper="h1"/>} />
        <About />
        <Experience />
        {projectList}
        {/* <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u><img src='https://i.imgur.com/hyJ4Bum.png' height="50" width="50"/></u></Link> */}
        <Contact loopText={<TextLoop interval={2000}>
        <Link spy={true} smooth={true}><span>build something together.</span></Link>
        <Link spy={true} smooth={true}><span>solve a problem.</span></Link>
        <Link spy={true} smooth={true}><span>grab coffee.</span></Link>
        <Link spy={true} smooth={true}><span>talk philosophy.</span></Link>
        <Link spy={true} smooth={true}><span>share memes.</span></Link>
        <Link spy={true} smooth={true}><span>learn something new.</span></Link>
        <Link spy={true} smooth={true}><span>innovate.</span></Link>
        </TextLoop>}/>
      </div>
    );
  }
}

export default App;
