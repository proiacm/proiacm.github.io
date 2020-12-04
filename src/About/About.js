import React from 'react';
import './About.css';
import profile from '../Images/ciaramaria.webp';

const About = () => {
    return (
            <div className='About'  id='about'> 
                        <div className='container'>
                                <img className='About-img' src={profile} alt='CiaraMaria'/> 
                                <div class="overlay">
                                        <div class="overlay-text">
                                                <u>Fun fact</u>:<br/><br/> I have lived in North America, Central America, and Europe!
                                        </div>
                                </div>
                        </div>
                                <div className='About-text'>
                                <h2 className='About-title'>Web & App Developer | Designer </h2>
                                <p>Leveraging experience in building client relationships, a passion for solving problems, and an eye for aesthetics
                                while developing stunning useable applications. My current tech stack inlcudes: <strong>JavaScript, npm, React, Ruby on Rails, Firebase,
                                Node, and SQlite</strong> </p>
                        </div>
            </div>
    )
}

export default About; 