import React from 'react'
import Nav from './Nav'
import '../styles/LocationPage.css'

function LocationPage() {
    return (
        <>
            <Nav/>
            <div className='conteneur_title_et_proprietaire'>
                <div className='conteneur_title-lieu_tags'>
                <h1 className='title_location'>
                    Titre de la location
                </h1>
                <h3 className='lieu_location'>
                 Lieu de la location
                </h3>
                <span className='conteneur_tags'>
                    <span className='location_tag'>Tag</span>
                    <span className='location_tag'>Tag</span>
                    <span className='location_tag'>Tag</span>
                </span>
                </div>
                <div className='conteneur_proprietaire_etoiles'>
                <div className='proprietaire'>
                <h3>Alexandre Dumas</h3>
                <div className='badge_proprietaire'></div>
                </div>
                <div className='location_etoiles'>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                </div>
            </div>
            </div>
            <div className='conteneur_description'>
            <h2 className='location_description'>Description</h2>
            <i class="fa-solid fa-angle-down"></i>
            </div>
        </>
        )
}

export default LocationPage

