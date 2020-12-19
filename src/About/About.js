import React from 'react';
import './About.css';
import portrait from '../Images/portrait.png';
const About = () => {

        
    return (
            <div className='about'> 
                <img className='about-img' src={portrait} alt='CiaraMaria'/> 
                        <h1 className='about-title'>Web & App Developer | Designer </h1> <br/>
                        <p className='about-text'>Full stack developer with an eye for aesthetics and an attitude for solving problems.
                        I love being a perpetual learner, constantly growing from experience and failure; and challenging my understanding of concepts through project building, refactoring old code, Udemy courses, and technical writing.
                        I am a versatile and driven professional with 8+ years of work experience from start-ups 
                        to some of the largest companies in the USA. <br/> <br/> Current tech stack: <strong>JavaScript, React, Ruby on Rails, Firebase, Node, and SQlite</strong>
                        </p>
            </div>   
    )
}

export default About; 