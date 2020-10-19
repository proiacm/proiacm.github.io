import React from 'react';
import './About.css'

const About = (props) => {
    return (
            <div className='About'>  
                <img className='About-img' src='https://i.imgur.com/oOhU8xs.jpg'></img>
                    <div className='About-text'>
                        I leverage my empathy and experience in building client relationships
                        while designing functional, aesthetic applications. <br/> <br/>
                        As a full-stack developer experienced in React, JavaScript, and Ruby on Rails, I have worked on multiple projects on my own <br/>
                        and as part of a team, with a focus on object-oriented programming, MVC architecture, and responsive SPAs.<br/> <br/>
                        I'm always learning and open to collaboration! <br/> <br/> 
                       <h3> Let's {props.loopText} </h3>
                    </div>
            </div>
    )
}

export default About; 