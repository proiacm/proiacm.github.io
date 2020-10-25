import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='Contact-img'>
            <div className='Contact' id='contact'>
                <h1>Contact</h1><br/>
              <h4><a className='Contact-link' target='_blank' href='https://www.linkedin.com/in/cmproia/'> Let's connect via LinkedIn</a> | <a className='Contact-link' target='_blank' href='https://github.com/proiacm'>Collaborate on GitHub</a> | <a className='Contact-link' target='_blank' href='https://dev.to/proiacm'>Check out my blog on DEV</a> | <a className='Contact-link' target='_blank' href={"mailto:" + 'proiacm@gmail.com'}>Send me an email</a></h4>
            
            </div>
        </div>
    )
};

export default Contact;

