const API_KEY = "0eb6eadba641309b96b8e88b9f6ba431";
async function fetchWeather() {
    //use fetch to do GET request for recipe 
    const requestUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
    //console.log(requestUrl);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
  }

  fetchWeather();

  
