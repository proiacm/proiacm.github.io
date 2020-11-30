import React from 'react';
import './About.css';
import profile from '../Images/ciaramaria.webp';

const About = (props) => {
    return (
            <div className='About' id='about'> 
                        <div className='About-text'>
                                <img className='About-img' src={profile} alt='CiaraMaria'/>       
                                <strong>Designer | Developer | Dog-person</strong> <br/> <br/>
                                Leveraging experience in building client relationships and passion for <br/>solving problems
                                while developing stunning, useable applications. 
                                <p className='fun-fact'>Fun fact: I have lived in North America, Central America, and Europe.</p>
                                <h4 className='animated'>Let's {props.loopText}</h4>
                                Tech stack: 
                        </div>
            </div>
    )
}

export default About; 