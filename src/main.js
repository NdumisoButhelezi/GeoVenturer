import './style.css';
import { initMap } from './map.js';
import { setupMarkers } from './markers.js';
import { setupSearch } from './search.js';
import { setupMeasurement } from './measurement.js';
import { setupFlashCards } from './flashcards.js';

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupMarkers();
  setupSearch();
  setupMeasurement();
  setupFlashCards();
});