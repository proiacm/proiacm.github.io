import React from 'react';
import './About.css';
import profile from '../Images/ciaramaria.webp';
import js from '../Images/js.png';
import react from '../Images/react.png';
import ruby from '../Images/ruby.png';
import rails from '../Images/rails.png';
import node from '../Images/node.png';
import sqlite from '../Images/sqlite.png';
import npm from '../Images/npm.png';
import lottie from '../Images/lottie.png';
import firebase from '../Images/firebase.png';

const About = () => {
    return (
            <div className='About'> 
                        <div className='About-text' id='about'>
                                <img className='About-img' src={profile} alt='CiaraMaria'/>       
                                <h1 className='About-title'>Developer | Designer | Dog-person</h1>
                                <p>Leveraging experience in building client relationships and a passion for <br/>solving problems
                                while developing stunning, useable applications.</p>
                                <p className='funfact'>Fun fact: I have lived in North America, Central America, and Europe.</p>                                
                                <img className='tech-stack' src={js} alt='js'/>
                                <img className='tech-stack' src={react} alt='react'/>
                                <img className='tech-stack' src={npm} alt='npm'/>  
                                <img className='tech-stack2' src={lottie} alt='lottie'/>  
                                 <br/>
                                <img className='tech-stack3' src={ruby} alt='ruby'/>  
                                <img className='tech-stack1' src={rails} alt='rails'/>  
                                <img className='tech-stack2' src={firebase} alt='firebase'/>  
                                <img className='tech-stack1' src={node} alt='node'/>  
                                <img className='tech-stack1' src={sqlite} alt='sqlite'/>   
                                <br/><br/>    
                        </div>
            </div>
    )
}

export default About; 