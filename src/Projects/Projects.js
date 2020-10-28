import React from 'react';
import './Projects.css';

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h2><a target='_blank' rel="noreferrer" href={props.link}>{props.name}</a></h2>
            <p>{props.desc}</p>
            <div className='Project'>
                    <iframe className='Project-img' src={props.video}/>
            </div> 
        </div>
    )
}

export default Projects;