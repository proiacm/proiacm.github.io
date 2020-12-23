import React from 'react';
import './About.css';
import portrait from '../Images/portrait.png';
const About = () => {

        
    return (
            <div className='about'> 
                <img className='about-img' src={portrait} alt='CiaraMaria'/> 
                        <h1 className='about-title'>Developer & Designer </h1> 
                        <p className='about-text'>Leveraging experience in building client relationships while designing stunning and intuitive applications. Developer with an eye for aesthetics and an attitude for solving problems.
                        I love being a perpetual learner, constantly growing from experience and failure; and challenging my understanding of concepts through project building, refactoring old code, Udemy courses, and technical blogging. 
                        I am a versatile and driven professional with 8+ years of work experience from start-ups 
                        to some of the largest companies in the USA. <br/> <br/> 
                        Current tech stack: <strong>React, CSS, JavaScript, Ruby on Rails, Firebase, Node, and SQlite</strong><br/> <br/>
                        <strong>Fun fact:</strong> I have lived in North America, Central America, and Europe. <br/>
                        <strong>Hobbies:</strong> reading, travel, weightlifting, camping, gaming, and coffee (if that counts).
                        </p>
            </div>   
    )
}

export default About; 