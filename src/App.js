import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import TextLoop from 'react-text-loop';
import glamlex from './Demos/glamlex.webp';
import untriggered from './Demos/untriggered.webp';
import christmas from './Demos/christmascountdown.webp';
import Timeline from './Timeline/Timeline';

class App extends Component {


  state = { 
    projects: [
     { name: 'Glamlex', img: glamlex , link: <a target='_blank' rel="noopener noreferrer" href='https://www.cmproia.com/Glamlex'>View Code</a>, live: <a className='live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Glamlex/'>[Live Demo]</a>, desc: 'React/JavaScript freelance project'},
     { name: 'Christmas Countdown', img: christmas, link: <a target='_blank' rel="noopener noreferrer" href='https://www.cmproia.com/Christmas'>View Code</a>, live: <a className= 'live' target='_blank' rel="noopener noreferrer" href='https://proiacm.github.io/Christmas/'>[Live Demo]</a>, desc: 'React/JavaScript countdown timer'},
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
        <Timeline />
        {projectList} <br/>
        <Contact loopText={<TextLoop interval={2000}>
        <span>build something together.</span>
        <span>solve a problem.</span>
        <span>grab coffee.</span>
        <span>talk philosophy.</span>
        <span>share memes.</span>
        <span>learn something new.</span>
        <span>innovate.</span>
        </TextLoop>}/>
      </div>
    );
  }
}

export default App;
