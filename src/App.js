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
import glamlex from './Demos/glamlex.webp';
import taskmaster from './Demos/taskmaster.webp';
import christmas from './Demos/christmascountdown.webp';

class App extends Component {


  state = { 
    projects: [
     { name: 'Glamlex', img: glamlex , desc: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/Glamlex'>View Code</a>, live: <a className='live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Glamlex/'>[View Live]</a>},
     { name: 'Christmas Countdown', img: christmas, desc: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/Christmas'>View Code</a>, live: <a className= 'live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Christmas/'>[View Live]</a>},
     { name: 'Taskmaster', img: taskmaster, desc: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/Taskmaster'>View Code</a>}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} demo={project.img} desc={project.desc} live={project.live} />
      })}
    </div>

    return (
      <div className="App">
        <Nav animatedText={<Typical className='animated-text' steps={['Hi, I\'m CiaraMaria!', 1000]}
        loop={1}
        wrapper="h1"/>} />
        <About />
        <Experience />
        <hr/> 
        <h1 className='projectheader' id='projects'>Featured Projects</h1>
        {projectList}
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
