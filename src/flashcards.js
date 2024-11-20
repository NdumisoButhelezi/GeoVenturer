import { getMap } from './map.js';

let recommendations = [];

export function setupFlashCards() {
  const map = getMap();
  
  map.addListener('idle', () => {
    const center = map.getCenter();
    fetchRecommendations(center);
  });
}

async function fetchRecommendations(location) {
  try {
    // Simulated recommendations since we don't have actual Gemini API access
    recommendations = [
      {
        name: "Durban Beach Front",
        type: "Beach",
        description: "Beautiful golden sand beach with warm Indian Ocean waters.",
        latitude: -29.8521,
        longitude: 31.0369
      },
      {
        name: "uShaka Marine World",
        type: "Theme Park",
        description: "Africa's largest marine theme park featuring aquarium and water rides.",
        latitude: -29.8683,
        longitude: 31.0452
      },
      {
        name: "Moses Mabhida Stadium",
        type: "Sports Venue",
        description: "Iconic stadium with adventure activities and city views.",
        latitude: -29.8283,
        longitude: 31.0306
      }
    ];
    
    renderFlashCards();
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    document.getElementById('flash-cards').innerHTML = `
      <div class="p-4 bg-red-100 text-red-700 rounded-lg">
        Unable to fetch recommendations at this time.
      </div>
    `;
  }
}

function renderFlashCards() {
  const container = document.getElementById('flash-cards');
  container.innerHTML = '';

  recommendations.forEach((rec, index) => {
    const card = document.createElement('div');
    card.className = 'flash-card';
    
    card.innerHTML = `
      <h3 class="flash-card-title">${rec.name}</h3>
      <p class="flash-card-type">${rec.type}</p>
      <p class="flash-card-description">${rec.description}</p>
      <div class="flash-card-buttons">
        <button class="btn btn-play" onclick="playTTS(${index})">
          Play
        </button>
        <button class="btn btn-view" onclick="viewOnMap(${index})">
          View on Map
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

window.playTTS = function(index) {
  const rec = recommendations[index];
  const utterance = new SpeechSynthesisUtterance(
    `${rec.name}, a ${rec.type}. ${rec.description}`
  );
  speechSynthesis.speak(utterance);
};

window.viewOnMap = function(index) {
  const rec = recommendations[index];
  const map = getMap();
  const location = { lat: rec.latitude, lng: rec.longitude };
  
  map.setCenter(location);
  map.setZoom(16);

  new google.maps.Marker({
    position: location,
    map: map,
    title: rec.name,
    animation: google.maps.Animation.DROP
  });
};