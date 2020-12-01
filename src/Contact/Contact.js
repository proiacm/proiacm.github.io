import React from 'react';
import './Contact.css';
import {Link} from 'react-scroll';

const Contact = (props) => {
    return (
        <div className='Contact-img'>
            <div className='Contact' id='contact'>
                <h2 className='animated'>Let's {props.loopText}</h2> <br/>                 
                <a className='Contact-link' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/cmproia/'>LinkedIn</a> &nbsp; | &nbsp;
                <a className='Contact-link' target='_blank' rel="noopener noreferrer" href={"mailto:" + 'proiacm@gmail.com'}>proiacm@gmail.com</a> &nbsp; | &nbsp;
                <a className='Contact-link' target='_blank' rel="noopener noreferrer" href='https://github.com/proiacm'>GitHub</a><br/><br/><br/><br/>
                <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u><img src='https://i.imgur.com/hyJ4Bum.png' height="50" width="50"/></u></Link><br/> <br/>
                <p className='footer'>© CiaraMaria Proia. All Rights Reserved.</p>

            </div>
        </div>
    )
};

export default Contact;

