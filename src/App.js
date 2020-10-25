import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical'
import TextLoop from 'react-text-loop';
import Experience from './Experience/Experience';
import {Link} from 'react-scroll'


class App extends Component {


  state = { 
    projects: [
     { name: 'Traveler', link: 'https://github.com/proiacm/traveler', gif:'https://media.giphy.com/media/hgg0zI4EhUAg3QgYAl/giphy.gif', desc: 'JavaScript trip tracker with Rails API backend.'},
     { name: 'Glamlex', link:'https://github.com/proiacm/glamlex_sinatra_project', gif: 'https://media.giphy.com/media/UpnkiPR6CAq7HqtI87/giphy.gif', desc: 'Ruby/Sinatra appointment manager using MVC and CRUD.', return: <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u>Return to top</u></Link>},
     { name: 'Untriggered', link: 'https://github.com/proiacm/untriggered', gif:'https://media.giphy.com/media/PGNdCyJiw2vtilMvIO/giphy.gif', desc: 'Ruby on Rails mood journal with Devise and OmniAuth.'}
   ],
   experience: [
     { logo: 'https://i.imgur.com/AZ7wGW8.png'},
     { logo: 'https://i.imgur.com/WjyvtcA.png'},
     { logo: 'https://i.imgur.com/LG81wah.png'}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} link={project.link} gif={project.gif} desc={project.desc} return={project.return}/>
      })}
    </div>

    let experienceList = <div>
      {this.state.experience.map((exp, index) => {
        return <Experience key={index} logo={exp.logo} />
      })}
    </div>

    return (
      <div className="App">
        <Nav animatedText={<Typical steps={['Hi, I\'m CiaraMaria and I\'m a software developer !', 1000]}
        loop={1}
        wrapper="h1"/>} />
        <About loopText={<TextLoop interval={2000}>
        <span>build something together.</span>
        <span>solve a problem.</span>
        <span>grab coffee.</span>
        <span>pair program.</span>
        <span>share memes.</span>
        <span>learn something new.</span>
        <span>innovate.</span>
        </TextLoop>} />
        <h4>A versatile professional with 8+ years of work experience from start-ups to the largest companies in the USA including:</h4>
        {experienceList} <br/>
        <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u>Return to top</u></Link>
        {projectList}
        <Contact />
      </div>
    );
  }
}

export default App;
