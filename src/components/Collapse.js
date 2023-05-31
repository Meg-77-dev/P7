import React from 'react';
import {useState} from 'react'

function Collapse(props) {
	const [isOpen, setIsOpen] = useState(false);
    const dropdown = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='location_collapses_content'>
        <div className='collapses_description'>
        <h2 className='collapses_descrip_equip'>{props.title}</h2>
        {!isOpen ? <i onClick={dropdown} class="fa-solid fa-angle-down" ></i> :<i onClick={dropdown} class="fa-solid fa-angle-up"></i>}
        </div>
        {isOpen && <p className='descrip_equip'>{props.content}</p>}
        </div>
        ) 
	
}

export default Collapse