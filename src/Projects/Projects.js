import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <strong>{props.name} &nbsp; {props.live}</strong><br/>
            {props.desc}
           <img className='image' src={props.demo}/>
            <p className='text'>{props.link}</p>
        </div>
    )
}

export default Projects;