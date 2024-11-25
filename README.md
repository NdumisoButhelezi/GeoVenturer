https://devpost.com/software/geoventure

# GeoVenturer

GeoVenturer is the ultimate tool for showcasing the potential of Google Maps APIs and creating meaningful, interactive map-based experiences.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Challenges](#challenges)
6. [Accomplishments](#accomplishments)
7. [Lessons Learned](#lessons-learned)
8. [Future Plans](#future-plans)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction

GeoVenturer was inspired by the desire to enhance how people interact with maps. By merging AI and geospatial technology, the platform provides a seamless, interactive, and engaging experience. GeoVenturer combines utility, accessibility, and aesthetics to make mapping experiences functional and enjoyable, offering real-time recommendations and dynamic interaction.

---

## Features

### Interactive Map Features
- Explore surroundings with dynamic maps.
- Add and manage custom markers on the map.
- Measure distances between points with a built-in measurement tool.
- Search for specific locations using the Google Places API.

### AI-Powered Recommendations
- Leverages the Gemini API to provide real-time suggestions for nearby places based on user location.
- Includes text-to-speech (TTS) functionality to narrate recommendations for accessibility.

### Flash Card Feature
- Displays visually appealing, interactive flash cards with recommendations.
- Flash cards include:
  - **Play Button**: Narrates information using TTS.
  - **View on Map Button**: Centers the map on the recommended location.

### Modern User Interface
- Clean, responsive, and intuitive design styled with Tailwind CSS.

---

## Technologies Used

- **Frontend:** Vite.js, HTML, CSS, JavaScript
- **Styling:** Tailwind CSS
- **Mapping:** Google Maps API
- **AI Recommendations:** Gemini API
- **Deployment:** Netlify
- **Environment Variables:** For secure API key management

---

## Setup and Installation

Follow these steps to set up and run GeoVenturer locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/GeoVenturer.git
   cd GeoVenturer
npm install
Set Up Environment Variables:

Create a .env file in the root directory.
Add your API keys for Google Maps and Gemini:
env
Copy code
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
Run the Application:

bash
Copy code
npm run dev
