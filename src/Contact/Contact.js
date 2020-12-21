import React from 'react';
import './Contact.css';
import {Link} from 'react-scroll';

const Contact = (props) => {

    return (
        <div className='contact' id='contact'>
            <h2 className='animated'>Let's {props.loopText}</h2>               
            <a className='contact-link' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/cmproia/'>LinkedIn</a> &nbsp; | &nbsp;
            <a className='contact-link' target='_blank' rel="noopener noreferrer" href={"mailto:" + 'proiacm@gmail.com'}>proiacm@gmail.com</a> &nbsp; | &nbsp;
            <a className='contact-link' target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm'>GitHub</a><br/><br/><br/><br/>
            <p className='footer'>© CiaraMaria Proia. All Rights Reserved.</p>

        </div>
    )
};

export default Contact;

