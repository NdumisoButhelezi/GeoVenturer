import { getMap } from './map.js';

export function setupSearch() {
  const searchBox = document.getElementById('search-box');
  const map = getMap();

  const autocomplete = new google.maps.places.Autocomplete(searchBox);
  autocomplete.bindTo('bounds', map);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name
    });
  });
}