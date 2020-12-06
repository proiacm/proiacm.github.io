import React from 'react';
import './About.css';
import profile from '../Images/cm.png';
import {Link} from 'react-scroll'

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
                                <h1 className='About-title'>Web & App Developer | Designer </h1> <br/>
                                <p>Full stack developer with an eye for aesthetics and an attitude for solving problems.
                                I love being a perpetual learner, constantly growing from experience and failure; and challenging my understanding of concepts through project building, refactoring old code, Udemy courses, and technical writing.
                                I am a versatile and driven professional with 8+ years of work experience from start-ups 
                                to some of the largest companies in the USA. <br/> <br/> My current tech stack inlcudes: <strong>JavaScript, React, npm, Ruby on Rails, Firebase, Node, and SQlite</strong>
                                </p>
                        </div>
                        <Link style={{ cursor: "pointer"}} to="resume" spy={true} smooth={true}><h2>&#8595;</h2></Link>
            </div>   
    )
}

export default About; 