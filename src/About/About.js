import React from 'react';
import './About.css'

const About = (props) => {
    return (
            <div className='About'>  
                <img className='About-img' src='https://i.imgur.com/oOhU8xs.jpg'></img>
                    <div className='About-text'>
                        <br/>
                        I leverage empathy and experience in building client relationships
                        while designing functional, aesthetic applications. <br/> <br/>
                        A versatile professional with 8+ years of work experience from start-ups to the largest companies in the USA. <br/><br/>
                        As a full-stack developer, I have worked on multiple projects on my own 
                        and as part of a team, <br/> with a focus on object-oriented programming, MVC architecture, and responsive SPAs.<br/> <br/>
                        <strong>Technical skills: React, JavaScript, Ruby on Rails, CSS, SQL </strong><br/> <br/>
                        I'm always learning and am currently open to work opportunities or collaboration! <br/> <br/> 
                       <h3> Let's {props.loopText} </h3>
                    </div>
            </div>
    )
}

export default About; 