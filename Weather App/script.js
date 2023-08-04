// Replace 'YOUR_API_KEY' with your actual API key from a weather API provider.
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data from the API based on the city name.
async function getWeatherData(cityName) {
  try {
    const response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to update the UI with weather data.
function updateUI(weatherData) {
  const locationElement = document.querySelector('.location');
  const weatherIconElement = document.querySelector('.weather-icon');
  const weatherDescriptionElement = document.querySelector('.weather-description');
  const temperatureElement = document.querySelector('.temperature');

  locationElement.textContent = weatherData.name;
  weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  weatherDescriptionElement.textContent = weatherData.weather[0].description;
  temperatureElement.textContent = `${weatherData.main.temp} °C`;
}

// Function to handle form submission and fetch weather data.
async function handleFormSubmit(event) {
  event.preventDefault();
  const cityInput = document.getElementById('city-input');
  const cityName = cityInput.value.trim();

  if (cityName !== '') {
    const weatherData = await getWeatherData(cityName);
    if (weatherData) {
      updateUI(weatherData);
    }
  }
}

// Event listener to handle form submission.
const form = document.getElementById('weather-form');
form.addEventListener('submit', handleFormSubmit);
