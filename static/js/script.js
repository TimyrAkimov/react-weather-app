import "./index.css"
import $ from 'jquery'
import { getValue } from "@testing-library/user-event/dist/utils"; 

const weatherBlock = document.querySelector('#weather');  

async function loadWeather(city){
    weatherBlock.innerHTML = `
    <div className="weather_loading">
        <img src="images/loading.gif" alt=""></img>
    </div>`;

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=4ee0cdbf4ff9cd5cc5c61b367e1b306b`;
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if(response.ok){
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
    console.log(city);
}

function getWeather(data){

    const location = data.name;
    console.log(location);
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div id="weather_header">
    <div id="weather_main">
      <div id="weather_city"">${location}</div>
      <div id="weather_status">${weatherStatus}</div>
    </div>
    <div id="weather_icon">
      <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}"></img>
    </div>
  </div>
  <div id="weather_temp">Temp: ${temp}</div>
  <div id="weather_feels_like">Feels like: ${feelsLike}</div>`;

  weatherBlock.innerHTML = template;
}

if(weatherBlock){
  const formElement = document.getElementById('form'); 
  formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  var city = formData.get('city');
  console.log(city);    
  loadWeather(city);
})};
