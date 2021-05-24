const API_KEY = "0eb6eadba641309b96b8e88b9f6ba431";
async function fetchWeather() {
    //use fetch to do GET request for recipe 
    const requestUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
    //console.log(requestUrl);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
  }

  fetchWeather();

// const newWeatherButton = document.getElementById("submitButton");
// newWeatherButton.addEventListener("click", fetchWeather);
// const ol = document.getElementById("showWeather");
// const getTemperature = dataResponse.main.temp
// console.log(getTemperature)

// function addWeather(string){
//     let li = document.createElement("li");
//     let listItem = document.createTextNode(string)
//     li.appendChild(listItem);
//     ol.appendChild(li);
    
// }

  
