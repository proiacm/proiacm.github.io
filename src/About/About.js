import React from 'react';
import './About.css';
import profile from '../Images/ciaramaria.webp';
import js from '../Images/js.png';
import react from '../Images/react.png';
import ruby from '../Images/ruby.png';
import rails from '../Images/rails.png';
import htmlcss from '../Images/htmlcss.png';
import node from '../Images/node.png';
import sqlite from '../Images/sqlite.png';
import npm from '../Images/npm.png';
import lottie from '../Images/lottie.png';

const About = () => {
    return (
            <div className='About'> 
                        <div className='About-text' id='about'>
                                <img className='About-img' src={profile} alt='CiaraMaria'/>       
                                <h1  className='fun'>Designer | Developer | Dog-person</h1>
                                Leveraging experience in building client relationships and passion for <br/>solving problems
                                while developing stunning, useable applications. 
                                <p>Fun fact: I have lived in North America, Central America, and Europe.</p>                                <img className='tech-stacktop' src={js} alt='js'/>
                                <img className='tech-stack' src={react} alt='react'/>
                                <img className='tech-stack' src={ruby} alt='ruby'/>  
                                <img className='tech-stack' src={rails} alt='rails'/>  
                                <img className='tech-stacktop' src={htmlcss} alt='htmlcss'/> <br/>
                                <img className='tech-stackbottom' src={node} alt='node'/>  
                                <img className='tech-stackbottom' src={sqlite} alt='sqlite'/>  
                                <img className='tech-stackbottom' src={npm} alt='npm'/>  
                                <img className='tech-stack' src={lottie} alt='lottie'/>   
                                <br/><br/>    
                        </div>
            </div>
    )
}

export default About; 