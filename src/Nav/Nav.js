import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';
import logo from '../Images/cmlogotrans.png';

const Nav = () => {

    return ( 
         <div className='nav' id='home'> 
                <p className='nav-bar-left'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}>About</Link></p>
                <p className='nav-bar-left'><Link style={{ cursor: "pointer"}} to="work" spy={true} smooth={true}>Work</Link></p>
                <p className='nav-bar-right'><a target='_blank' rel="noopener noreferrer" href='https://dev.to/proiacm'>Blog</a></p>
                <p className='nav-bar-right'><Link style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}>Contact</Link></p>
                
                <img className='nav-logo' src={logo} alt='logo'/>
        </div>
    )
}

export default Nav; 

