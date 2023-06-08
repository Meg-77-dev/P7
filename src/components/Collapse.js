import React from 'react';
import {useState} from 'react'

function Collapse(props) {
    //Le collapse est fermé par défaut 
	const [isOpen, setIsOpen] = useState(false);
    //Fonction contenant le contraire donc le collapse devient true donc ouvert
    const dropdown = () => {
        setIsOpen(!isOpen)
    };

//Au clic sur la fèche du bas le collapse s'ouvre et au clic sur la flèche du haut il se ferme   
    return (
        <div className='location_collapses_content'>
        <div className='collapses_description'>
        <h2 className='collapses_descrip_equip'>{props.title}</h2>
        {!isOpen ? <i onClick={dropdown} className="fa-solid fa-angle-down" ></i> :<i onClick={dropdown} className="fa-solid fa-angle-up"></i>}
        </div>
        {isOpen && <p className='descrip_equip'>{props.content}</p>}
        </div>
        ) 
	
}

export default Collapse