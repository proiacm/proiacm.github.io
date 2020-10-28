import React from 'react';
import './Contact.css';
import {Link} from 'react-scroll'

const Contact = () => {
    return (
        <div className='Contact-img'>
            <div className='Contact' id='contact'>
                <br/>
                <h1>Let's Connect</h1><br/>
               
                <a className='Contact-link' target='_blank' href='https://www.linkedin.com/in/cmproia/'> <img className='logo1' src="https://i.imgur.com/PEDSkM6.png" alt="CiaraMaria's LinkedIn"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://github.com/proiacm'><img className='logo' src="https://i.imgur.com/7Av2xFa.png" alt="CiaraMaria's GitHub Profile"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://dev.to/proiacm'><img className='logo' src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="CiaraMaria's DEV Profile"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href={"mailto:" + 'proiacm@gmail.com'}><img className='logo' src="https://i.imgur.com/GoTMYXF.png" alt="CiaraMaria's Email"/> </a>
            
                <p>I'm in Colorado Springs, CO -- also open to remote work</p> <br/> <br/>
                <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u><img src='https://i.imgur.com/hyJ4Bum.png' height="50" width="50"/></u></Link>
            </div>
        </div>
    )
};

export default Contact;

