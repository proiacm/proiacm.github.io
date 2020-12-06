import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
            <div className='Project-card'>
                <h3>{props.name} {props.live}</h3>
                {props.desc}
            <img className='image' alt='project' src={props.demo}/>
                <p className='text'>{props.link}</p>
            </div>
    )
}

export default Projects;