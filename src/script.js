import "./index.css"
import $ from 'jquery'
import { getValue } from "@testing-library/user-event/dist/utils";

$('#menu-btn').on('click',function(){
    $('#menu').toggleClass('menu_active');
    $('#weather').toggleClass('weather_active');
  });

  function enterCity(){
  const formElement = document.getElementById('form'); 
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    var city = formData.get('city');
    return city;
  })};  
  
const weatherBlock = document.querySelector('#weather');

$.getJSON('https://json.geoiplookup.io/api?callback=?',  function getIP(data) {
const ip = data.ip;
return ip;
});

async function getCity(ip, data){
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
var token = "a739dea47596afd88fb7f0d58e7bb84eb27a6e04";
var query = String(ip);
console.log(query);

var options = {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

fetch(url + query, options)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log("error", error));

const location = data.city;

return location;
};

async function loadWeather(){
    weatherBlock.innerHTML = `
    <div className="weather_loading">
        <img src="images/loading.gif" alt=""></img>
    </div>`;

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Найроби&appid=4ee0cdbf4ff9cd5cc5c61b367e1b306b`;
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if(response.ok){
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){

    const location = data.name;
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
  loadWeather();  
}