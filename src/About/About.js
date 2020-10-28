import React from 'react';
import './About.css'
import profile from '../Images/ciaramaria.webp';

const About = (props) => {
    return (
            <div className='About'>  
                <img id='about' className='About-img' src={profile} alt='Software Developer'/>
                    <div className='About-text'>
                        <br/>
                        <h4>Technical skills: React | JavaScript | Ruby on Rails | CSS | SQL</h4>
                        Leveraging experience in building client relationships and problem solving
                            while designing stunning applications.
                        <ul>
                            <li>Aesthetic designs, responsive SPAs, object-oriented programming, and database management.</li> <br/>
                            <li> MVC architecture, CRUD, RESTful APIs, and user-friendly functionality including third-party authentication.</li> 
                        </ul>
                        I want to be a part of helping businesses advance their digital footprint in the Information Age
                        and relish working with people whom I can learn from and that relentlessly look for the best solutions to problems. <br/> <br/>
                        I'm always learning and am currently open to work opportunities or collaboration! <br/><br/>
                       <h3 className='animated'> Let's {props.loopText} </h3> 
                    </div>
                    <hr/>
            </div>
    )
}

export default About; 