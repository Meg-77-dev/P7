import React from 'react'
import { Navigate } from 'react-router-dom'
import Error from './Error'
import '../styles/LocationPage.css'
import locationList from '../datas/locationList.json'
import Gallery from '../components/Gallery'
import Collapse from '../components/Collapse'

import { useParams } from 'react-router-dom'

function LocationPage() {

    let { id } = useParams()
    const logement = locationList.find((logement) => logement.id === id);
    if(logement === undefined) {
        return <Error />;
    }
    const { title, location, pictures, tags, host, rating, description, equipments } = logement;
    const stars = [1, 2, 3, 4, 5];


    return (
        <>
            <Gallery pictures={logement.pictures} />
                <div className='conteneur_title_et_proprietaire'>
                    <div className='conteneur_title-lieu_tags'>
                        <h1 className='title_location'>{logement.title}
                        </h1>
                        <h3 className='lieu_location'>
                            {logement.location}
                        </h3>
                        <span className='conteneur_tags'>
                            {tags.map((tag) => {
                                return (
                                    <span className="location_tag" key={`${tag}`}>
                                        {tag}
                                    </span>
                                );
                            })}
                        </span>
                    </div>
                    <div className='conteneur_proprietaire_etoiles'>
                        <div className='proprietaire'>
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} className='badge_proprietaire'></img>
                        </div>
                        <div className='location_etoiles'>
                            {stars.map((star => 
                            rating >= star ? (
                                <span className='etoile_rouge' key={star.toString()}><i className="fa-solid fa-star"></i></span>
                            ) : (
                                <span className='etoile-grise' key={star.toString()} ><i className="fa-solid fa-star"></i></span>
                            )
                                
                            ))}
                        
                        </div>
                    </div>
                </div>
                <div className='conteneur_location_collapses'>
                    <Collapse 
                    title= 'Description' 
                    content={logement.description} />
                    <Collapse title='Équipements'
                    equipments ={logement.equipments} content={logement.equipments.map((equipments, i) =>
                                (<li key={i}>{equipments}</li>))} />
                </div>
        </>
    )
}


export default LocationPage
