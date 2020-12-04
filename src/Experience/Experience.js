import React from 'react';
import './Experience.css';
import resume from '../Images/CiaraMaria_Proia_Resume.pdf';

const Experience = () => {

    return (
        <div className='Experience'>
             <hr/>
            <p className='exp-text'>I am a versatile and driven professional with 8+ years of work experience from start-ups 
                to the largest companies in the USA. Let's discuss opportunities!</p>
                <a className='myButton' href={resume} download>Download Resume</a>
        </div>
    )
}

export default Experience;