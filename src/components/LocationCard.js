import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/LocationCard.css'

function LocationCard(props) {
	return (
		<Link to={`/location/${props.id}`}>
			<li key={props.id} className='location'>
				<img src={props.cover} alt={props.title} className='cover_location'/>
				<h2 className='location_title'>{props.title}</h2>
			</li>
		</Link>
	)
}

export default LocationCard