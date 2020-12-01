import React from 'react';
import './Experience.css';
import resume from '../Images/CiaraMaria_Proia_Resume.pdf';

const Experience = () => {

    return (
        <div className='Experience'>
             <hr/>
            <p className='experience'>I am a versatile and driven professional with 8+ years of work experience ranging from start-ups 
                to some of the largest companies in the USA.</p>
                <a className='myButton' href={resume} download>Download Resume</a>
        </div>
    )
}

export default Experience;