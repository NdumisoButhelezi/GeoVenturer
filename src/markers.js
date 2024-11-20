import { getMap } from './map.js';

let markers = [];

export function setupMarkers() {
  const map = getMap();
  
  map.addListener('click', (event) => {
    addMarker(event.latLng);
  });

  document.getElementById('clear-btn').addEventListener('click', clearMarkers);
}

function addMarker(location) {
  const map = getMap();
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `Latitude: ${location.lat().toFixed(6)}<br>Longitude: ${location.lng().toFixed(6)}`
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

  markers.push(marker);
}

function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

export function getMarkers() {
  return markers;
}