import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h3>{props.name} &nbsp;&nbsp; {props.live}</h3>
           <img className='image' src={props.demo}/>
            <p className='text'>{props.desc}</p>
        </div>
    )
}

export default Projects;