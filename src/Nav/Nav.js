import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'

const Nav = (props) => {

    return (
        <div className='Nav-img'>
            <div className='Nav'>
                {props.animatedText} <br/>
                <h3><Link style={{ cursor: "pointer" }} to="resume" spy={true} smooth={true}><u>Resume</u></Link> | <Link style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true}><u>Projects</u></Link> | <Link style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true}><u>Contact</u></Link></h3>
            </div>
        </div>
    )
}

export default Nav; 

