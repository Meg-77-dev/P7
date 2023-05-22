import '../styles/LocationItem.css'

function LocationItem({cover, title}) {

return(
	<div className='location-list'>
	<li className='location'>
		<img className='location-item-cover' src={cover} alt={`${title} cover`} />
	{title}
	</li>
	</div>
)
}

export default LocationItem