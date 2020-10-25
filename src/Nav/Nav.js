import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'

const Nav = (props) => {

    return (
        <div className='Nav-img'>
            <div className='Nav'>
                {props.animatedText} <br/>
                <h3><Link style={{ cursor: "pointer" }} to="resume" spy={true} smooth={true}>Resume</Link> | <Link style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true}>Projects</Link> | <Link style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true}>Contact</Link></h3>
            </div>
        </div>
    )
}

export default Nav; 

