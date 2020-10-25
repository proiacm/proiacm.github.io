import React from 'react';
import './Contact.css';
import {Link} from 'react-scroll'

const Contact = () => {
    return (
        <div className='Contact-img'>
            <div className='Contact' id='contact'>
                <br/>
                <h2>Let's Connect</h2><br/>
               
                <a className='Contact-link' target='_blank' href='https://www.linkedin.com/in/cmproia/'> <img src="https://i.imgur.com/PEDSkM6.png" alt="CiaraMaria's LinkedIn" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://github.com/proiacm'><img src="https://i.imgur.com/7Av2xFa.png" alt="CiaraMaria's GitHub Profile" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://dev.to/proiacm'><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="CiaraMaria's DEV Profile" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href={"mailto:" + 'proiacm@gmail.com'}><img src="https://i.imgur.com/GoTMYXF.png" alt="CiaraMaria's Email" height="50" width="50"/> </a>
            
                <p>I'm in Colorado Springs, CO -- also open to remote work</p> <br/> <br/>
                <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u>Return to top</u></Link>
            </div>
        </div>
    )
};

export default Contact;

