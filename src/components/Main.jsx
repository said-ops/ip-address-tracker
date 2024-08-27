import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import useGeoStore from '../store/geoStore'

function Main() {

  const geoInfos = useGeoStore(state=>state.geoInfos)
  const mapRef = useRef(null)


  // function initializeMap(latitude, longitude) {

  //   if (mapRef.current) return;
  //   // Initialize the map
  //   const map = L.map('map').setView([latitude, longitude], 13);

  //   // Add the tile layer to the map
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap contributors'
  //   }).addTo(map);

  //   // Add a marker at the IP location
  //   L.marker([latitude, longitude]).addTo(map)
  //     .bindPopup(`IP Location: (${latitude}, ${longitude})`)
  //     .openPopup();

  //     mapRef.current = map;
  // }

  useEffect(() => {
    if (geoInfos.lat && geoInfos.long) {
      // Check if the map is already initialized
      if (!mapRef.current) {
        // Initialize the map
        const map = L.map('map').setView([geoInfos.lat, geoInfos.long], 13);

        // Add the tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Store the map instance
        mapRef.current = map;
      } else {
        // Update the existing map
        mapRef.current.setView([geoInfos.lat, geoInfos.long], 13);
        L.marker([geoInfos.lat, geoInfos.long]).addTo(mapRef.current)
          .bindPopup(`IP Location: (${geoInfos.lat}, ${geoInfos.long})`)
          .openPopup();
      }
    }
  }, [geoInfos]);
  return (
    <div id='map'
          style={{
            zIndex:'2'
          }}></div>
  )
}

export default Main