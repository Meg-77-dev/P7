import React from "react";
import LocationCard from "../components/LocationCard"
import LocationList from "../datas/LocationList.json"
import '../styles/LocationGrid.css'

function LocationGrid() {
 
  return (
    <ul className="conteneur-Locations">
      {LocationList.map((location) => (
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

