import {useState} from 'react'
import React from 'react'
import '../styles/HomeLocationList.css'
import LocationItem from './LocationItem'
import LocationList from '../datas/LocationList'


function HomeLocationList() {
const [location, setLocations] = useState([])

    return (
        <div>
        <LocationItem/>
        </div>
    )
}

export default HomeLocationList