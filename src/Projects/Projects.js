import React from 'react';
import './Projects.css'

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h2 id='projects'><u>{props.name}</u></h2>
            <p>{props.desc}</p>
            <div className='Project'>
                <a target='_blank' href={props.link}>
                    <img className='Project-img' src={props.gif}/>
                </a> 
            </div> 
        </div>
    )
}

export default Projects;