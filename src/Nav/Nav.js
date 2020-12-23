import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';
import logo from '../Images/cmlogotrans.png';

const Nav = () => {

    return ( 
         <div className='nav' id='home'> 
                <p className='nav-bar-left'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}>About</Link></p>
                <p className='nav-bar-left'><Link style={{ cursor: "pointer"}} to="work" spy={true} smooth={true}>Projects</Link></p>
                <p className='nav-bar-right'><a target='_blank' rel="noopener noreferrer" href='https://dev.to/proiacm'>Blog</a></p>
                <p className='nav-bar-right'><Link style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}>Contact</Link></p>
                
                {/* <img className='nav-logo' src={logo} alt='logo'/> */}

                <svg className='svg' width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                {/* <g>
              
                <rect fill="#fff" id="canvas_background" height="602" width="802" y="-1" x="-1"/>
                <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                </g>
                </g> */}
                <g>
                
                <rect className='path' stroke="#000" id="svg_3" height="318.99999" width="298.99999" y="125.45313" x="157.5" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
                <rect className='path2' stroke="#000" id="svg_4" height="316.99999" width="304" y="103.45313" x="132.5" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
                </g>
                </svg>
        </div>
    )
}

export default Nav; 

