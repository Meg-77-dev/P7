import React from 'react'
import '../styles/LocationPage.css'
import locationList from '../datas/locationList.json'
import Gallery from './Gallery'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

function LocationPage() {

    let { id } = useParams()
    const logement = locationList.find((logement) => logement.id === id);
    const { title, location, pictures, tags, host, rating, description, equipments } = logement;
    const range = [1, 2, 3, 4, 5];

    return (
        <>
            <Gallery pictures={logement.pictures} />
            <section>
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
                            <span className='etoile_rouge'><i class="fa-solid fa-star"></i></span>
                            <span className='etoile-grise' ><i class="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                </div>
                <div className='conteneur_location_collapses'>
                    <div className='location_collapses_content'>
                        <div className='collapses_description'>
                            <h2 className='collapses_descrip_equip'>Description</h2>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <p className='descrip_equip'>{logement.description}</p>
                    </div>
                    <div className='location_collapses_content'>
                        <div className='collapses_description'>
                            <h2 className='collapses_descrip_equip'>Équipements</h2>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className='descrip_equip'>
                            {logement.equipments.map((equipments, i) =>
                                (<li key={i}>{equipments}</li>))}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LocationPage
