const API_KEY = "0eb6eadba641309b96b8e88b9f6ba431";
let weatherDisplay = document.getElementById("displayWeather");

// function to change city name as per user selection 

let cityName = 0;
function changeCityName() {
  let location = document.getElementById("cities");
  let locationValue = location.value;
  if (locationValue === "Pattaya") {
    cityName = "Pattaya";
  } else if (locationValue === "Bangkok") {
    cityName = "Bangkok";
  } else if (locationValue === "Chiang Mai") {
    cityName = "Chiang Mai";
  } else if (locationValue === "Ko Samui") {
    cityName = "Ko Samui";
  } else if (locationValue === "Phuket") {
    cityName = "Phuket";
  }
}

changeCityName();

// async function to get current weather from API and display result on webpage

async function fetchWeather() {
  const requestUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
  const dataResponse = await requestUrl.json();

  // display result on webpage

  let getCurrentWeatherFarenheit = dataResponse.main.temp;
  let convertWeatherToCelsius = (getCurrentWeatherFarenheit - 32) * 5 / 49;
  weatherDisplay.innerHTML = `\uFE0F Current Weather: ${convertWeatherToCelsius.toFixed(1)} \u00B0 C`

}

fetchWeather();







