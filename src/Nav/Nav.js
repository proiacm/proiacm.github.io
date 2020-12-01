import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'
import LottieAnimation from '../Lottie';
import home from '../Animation/dev.json';

const Nav = (props) => {

    return ( 
         <div className='Nav' id='nav'> 
                <LottieAnimation lotti={home} height={300} width={300} />
                {props.animatedText} <br/>
                <h3 className='Nav-bar'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}><u>About</u></Link> | <Link style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true}><u>Projects</u></Link> | <Link style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true}><u>Contact</u></Link> | <a target='_blank' rel="noopener noreferrer" href='https://dev.to/proiacm'>Blog</a></h3>
        </div>
    )
}

export default Nav; 

