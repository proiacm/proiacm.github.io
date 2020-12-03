import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h3>{props.name} &nbsp; {props.live}</h3>
            <p>{props.desc}</p>
           <img className='image' src={props.demo}/>
            <p className='text'>{props.link}</p>
        </div>
    )
}

export default Projects;