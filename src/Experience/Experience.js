import React from 'react';
import './Experience.css';
import {Link} from 'react-scroll';

const Experience = () => {

    return (
        <div className='Experience'>
            <p className='experience'>A versatile and driven professional with 8+ years of work experience ranging from start-ups 
                to some of the largest companies in the USA including:</p>
                <img className='exp' src='https://i.imgur.com/AZ7wGW8.png'/> 
                <img className='exp' src='https://i.imgur.com/WjyvtcA.png'/> 
                <img className='exp' src='https://i.imgur.com/LG81wah.png'/> <br/> <br/>
             {/* <Link style={{ cursor: "pointer"}} to="nav" spy={true} smooth={true}><u><img src='https://i.imgur.com/hyJ4Bum.png' height="50" width="50"/></u></Link> */}
        </div>
    )
}

export default Experience;