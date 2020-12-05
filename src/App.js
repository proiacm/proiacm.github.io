import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import TextLoop from 'react-text-loop';
import {Link} from 'react-scroll';
import glamlex from './Demos/glamlex.webp';
import untriggered from './Demos/untriggered.webp';
import christmas from './Demos/christmascountdown.webp';

class App extends Component {


  state = { 
    projects: [
     { name: 'Glamlex', img: glamlex , link: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/Glamlex'>View Code</a>, live: <a className='live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Glamlex/'>[Live Demo]</a>, desc: 'React/JavaScript freelance project blueprint'},
     { name: 'Christmas Countdown', img: christmas, link: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/Christmas'>View Code</a>, live: <a className= 'live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Christmas/'>[Live Demo]</a>, desc: 'React/JavaScript countdown timer'},
     { name: 'Untriggered', img: untriggered, link: <a target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm/untriggered'>View Code</a>, live: '[Live Soon]', desc: 'Ruby on Rails app with third-party auth'}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} demo={project.img} link={project.link} live={project.live} desc={project.desc}/>
      })}
    </div>

    return (
      <div className="App">
        <Nav />
        <About />
        <h2 className='projectheader' id='projects'>Featured Projects</h2>
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
