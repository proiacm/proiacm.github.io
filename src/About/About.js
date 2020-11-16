import React from 'react';
import './About.css';

const About = (props) => {
    return (
            <div className='About'>  
                    <div className='About-text'  id='about'>
                            Lover of design and all things aesthetic. <br/>
                            <h4>Technical skills: React | JavaScript | Ruby on Rails | CSS | SQL</h4>
                            Leveraging experience in building client relationships and problem solving
                            while developing stunning useable applications. <br/>
                            From development to deployment I relish writing clean code, designing engaging UI, 
                            and find myself enthralled with solving problems. <br/> <br/>
                            <h4 className='fun-fact'>Fun fact: I have lived in North America, Central America, and Europe.</h4><br/>
                       <h3 className='animated'> Let's {props.loopText} </h3>
                    </div>
            </div>
    )
}

export default About; 