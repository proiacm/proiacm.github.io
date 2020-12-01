import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h3><a target='_blank' rel="noopener noreferrer" href={props.link}>{props.name}</a></h3>
           <img className='image' src={props.demo}/>
            <p className='text'>{props.desc}</p>
        </div>
    )
}

export default Projects;