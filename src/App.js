import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical'
import TextLoop from 'react-text-loop';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

class App extends Component {


  state = { 
    projects: [
     { name: 'Traveler', link: 'https://github.com/proiacm/traveler', gif:'https://media.giphy.com/media/hgg0zI4EhUAg3QgYAl/giphy.gif', desc: 'JavaScript trip tracker with Rails API backend.'},
     { name: 'Glamlex', link:'https://github.com/proiacm/glamlex_sinatra_project', gif: 'https://media.giphy.com/media/UpnkiPR6CAq7HqtI87/giphy.gif', desc: 'Ruby/Sinatra appointment manager using MVC and CRUD.'},
     { name: 'Untriggered', link: 'https://github.com/proiacm/untriggered', gif:'https://media.giphy.com/media/PGNdCyJiw2vtilMvIO/giphy.gif', desc: 'Ruby on Rails mood journal with Devise and OmniAuth.'}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} link={project.link} gif={project.gif} desc={project.desc} />
      })}
    </div>

    return (
      <div className="App">
        <Nav animatedText={<Typical steps={['Hi, I\'m CiaraMaria...', 1000, 'and I\'m a software developer!', 500]}
        loop={Infinity}
        wrapper="h1"/>} />
        <About loopText={<TextLoop interval={2000}>
                    <span>build something together.</span>
                    <span>solve a problem.</span>
                    <span>grab coffee.</span>
                    <span>pair program.</span>
                    <span>share memes.</span>
                    <span>learn something new.</span>
                    <span>innovate.</span>
                    </TextLoop>} /> <br/>
        {projectList}
        <Contact />
      </div>
    );
  }
}

export default App;
