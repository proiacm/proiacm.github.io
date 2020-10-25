import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='Contact-img' id='contact'>
            <div className='Contact'>
                <br/>
                <h1>Let's Connect</h1><br/>
                <a className='Contact-link' target='_blank' href='https://www.linkedin.com/in/cmproia/'> <img src="https://i.imgur.com/PEDSkM6.png" alt="CiaraMaria's LinkedIn" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://github.com/proiacm'><img src="https://i.imgur.com/7Av2xFa.png" alt="CiaraMaria's GitHub Profile" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href='https://dev.to/proiacm'><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="CiaraMaria's DEV Profile" height="50" width="50"/></a> &nbsp; &nbsp;
                <a className='Contact-link' target='_blank' href={"mailto:" + 'proiacm@gmail.com'}><img src="https://i.imgur.com/GoTMYXF.png" alt="CiaraMaria's Email" height="50" width="50"/> </a>
            </div>
        </div>
    )
};

export default Contact;

