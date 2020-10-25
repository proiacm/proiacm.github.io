import React from 'react';
import './Projects.css'

const Projects = (props) => {
    
    return (
        <div className='Project-card' id='projects'>
            <br/> <br/>
            <h2><u>{props.name}</u></h2>
            <p>{props.desc}</p>
            <div className='Project'>
                <a target='_blank' href={props.link}>
                    <img className='Project-img' src={props.gif}/>
                </a> <br/>
            </div> <br/> 
            {props.return}
        </div>
    )
}

export default Projects;