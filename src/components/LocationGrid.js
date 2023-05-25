import React from "react";
import LocationCard from "../components/LocationCard"
import locationList from "../datas/locationList.json"
import '../styles/LocationGrid.css'

function LocationGrid() {
 
  return (
    <ul className="conteneur-Locations">
      {locationList.map((location) => (
  <LocationCard
    key={location.id}
    title={location.title}
    cover={location.cover}
    id={location.id}
  />
  ))}
    </ul>
  );
}
export default LocationGrid;

