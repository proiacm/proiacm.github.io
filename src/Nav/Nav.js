import React from 'react';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className='Nav-img'>
            <div className='Nav'>
                {props.animatedText}
            </div>
        </div>
    )
}

export default Nav; 

