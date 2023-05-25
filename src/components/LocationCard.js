import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/LocationCard.css'

function LocationCard(props) {
	console.log("props", props)
	return (
		<Link to="/location_list">
			<li key={props.id} className='location'>
				<img src={props.cover} alt={props.title} className='cover_location'/>
				<h4 className='location_title'>{props.title}</h4>
			</li>
		</Link>
	)
}

export default LocationCard