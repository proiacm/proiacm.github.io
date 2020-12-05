import React from 'react';
import './About.css';
import profile from '../Images/cm.png';
import resume from '../Images/CiaraMaria_Proia_Resume.pdf';

const About = () => {
    return (
            <div className='About'> 
                        <div className='container' id='about'>
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
                                while developing stunning and intuitive applications. <br/><br/>I love being a perpetual learner and am continuously expanding my knowledge
                                on current and new technology through Udemy, project building, and technical writing. <br/><br/>My current tech stack inlcudes: <strong>JavaScript, React, npm, Ruby on Rails, Firebase,
                                Node, and SQlite</strong><hr/>
                                I am a versatile and driven professional with 8+ years of work experience from start-ups 
                                to the largest companies in the USA. Let's discuss opportunities!</p>
                                <a className='myButton' href={resume} download>Download Resume</a>
                        </div>
            </div>
    )
}

export default About; 