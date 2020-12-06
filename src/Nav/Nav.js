import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'

const Nav = (props) => {

    return ( 
         <div className='home-title'> 
          <span>CiaraMaria</span>
                <p className='Nav-bar'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}><u>About</u></Link> | <Link style={{ cursor: "pointer"}} to="resume" spy={true} smooth={true}><u>Resume</u></Link> | <Link style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true}><u>Projects</u></Link> | <Link style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true}><u>Contact</u></Link> | <a className='blog' target='_blank' rel="noopener noreferrer" href='https://dev.to/proiacm'>Blog</a></p>
        </div>
    )
}

export default Nav; 

