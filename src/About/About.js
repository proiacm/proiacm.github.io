import React from 'react';
import './About.css'

const About = (props) => {
    return (
            <div className='About' id='about'>  
                <img className='About-img' src='https://i.imgur.com/oOhU8xs.jpg'/>
                    <div className='About-text'>
                        <br/>
                        <h4>Technical skills: React | JavaScript | Ruby on Rails | CSS | SQL</h4>
                       <p>I leverage empathy and experience in building client relationships
                        while designing functional, aesthetic applications. <br/> <br/>
                        As a full-stack dev, I've worked on multiple projects individually and on a team ranging from
                        database management, object-oriented programming, MVC architecture, responsive SPAs, and aesthetic designs.
                        I'm familiar with CRUD, RESTful architecture, APIs, and user functionality including third-party authentication. 
                        I thrive within a culture that sets clear expectations and views accountability as positive. 
                        I want to be a part of helping businesses advance their digital footprint in the Information Age
                        and relish working with people whom I can learn from and that relentlessly look for the best solutions to problems.<br/><br/>
                        I'm always learning and am currently open to work opportunities or collaboration! <br/><br/></p> 
                       <h3> Let's {props.loopText} </h3> 
                       <hr/>
                    </div>
            </div>
    )
}

export default About; 