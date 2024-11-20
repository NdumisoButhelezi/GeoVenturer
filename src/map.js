let map;
let currentLocation;

export function initMap() {
  const defaultLocation = { lat: -29.8587, lng: 31.0218 }; // Durban, South Africa

  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 13,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  // Try to get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(currentLocation);
        addUserMarker(currentLocation);
      },
      () => {
        console.log('Geolocation failed. Using default location.');
        currentLocation = defaultLocation;
      }
    );
  }

  return map;
}

function addUserMarker(location) {
  new google.maps.Marker({
    position: location,
    map: map,
    title: 'You are here',
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    }
  });
}

export function getMap() {
  return map;
}

export function getCurrentLocation() {
  return currentLocation;
}