import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card' id='projects'>
            <h2><a target='_blank' rel="noopener noreferrer" href={props.link}>{props.name}</a></h2>
           <div className='Project-img'><img className='Project-img' src={props.demo}/></div> 
            <p>{props.desc} &nbsp; &nbsp; &nbsp; {props.desc2}</p>
        </div>
    )
}

export default Projects;