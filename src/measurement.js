import { getMap } from './map.js';

let measureMode = false;
let measurePoints = [];
let measureMarkers = [];
let measureLine = null;

export function setupMeasurement() {
  const measureBtn = document.getElementById('measure-btn');
  const map = getMap();

  measureBtn.addEventListener('click', () => {
    measureMode = !measureMode;
    measureBtn.textContent = measureMode ? 'Stop Measuring' : 'Measure Distance';
    measureBtn.classList.toggle('bg-red-500');
    measureBtn.classList.toggle('bg-blue-500');

    if (!measureMode) {
      clearMeasurement();
    }
  });

  map.addListener('click', (e) => {
    if (measureMode) {
      addMeasurePoint(e.latLng);
    }
  });
}

function addMeasurePoint(latLng) {
  const map = getMap();
  
  measurePoints.push(latLng);
  
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: '#4B5563',
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: '#ffffff'
    }
  });
  
  measureMarkers.push(marker);

  if (measurePoints.length > 1) {
    updateMeasureLine();
  }
}

function updateMeasureLine() {
  const map = getMap();
  
  if (measureLine) {
    measureLine.setMap(null);
  }

  measureLine = new google.maps.Polyline({
    path: measurePoints,
    geodesic: true,
    strokeColor: '#4B5563',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map
  });

  const distance = calculateDistance();
  measureLine.setOptions({
    title: `Total distance: ${distance.toFixed(2)} km`
  });
}

function calculateDistance() {
  let total = 0;
  for (let i = 0; i < measurePoints.length - 1; i++) {
    total += google.maps.geometry.spherical.computeDistanceBetween(
      measurePoints[i],
      measurePoints[i + 1]
    );
  }
  return total / 1000; // Convert to kilometers
}

function clearMeasurement() {
  measureMarkers.forEach(marker => marker.setMap(null));
  if (measureLine) {
    measureLine.setMap(null);
  }
  measurePoints = [];
  measureMarkers = [];
  measureLine = null;
}