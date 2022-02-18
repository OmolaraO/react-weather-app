import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);
 const [weatherData, setWeatherData]  = useState({ready: false });   
function handleResponse(response) {     
setWeatherData({
ready: true,
temperature: response.data.main.temp,
coordinates: response.data.coord,
city: response.data.name,
date: new Date(response.data.dt*1000),
icon: response.data.weather[0].icon,
description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity
});

}

function search() {
let apiKey = "baf56f4471be4826660e97693ea45c45";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function updateCity(event) {
 setCity(event.target.value)
}

if(weatherData.ready) {
return <div className="Weather">
    <form onSubmit = {handleSubmit}>
        <div className="row">
        <div className="col-6">
        <input type="search" placeholder="type a city"
        autoFocus="on"
        onChange = {updateCity}
        />
         </div>
        <div className="col-6">
        <input type="submit" value="Search" className="btn btn-primary w-80"/>
        </div>
        </div>
    </form>
    <WeatherInfo data={weatherData} />
     <WeatherForecast coordinates={weatherData.coordinates}  /> 
   </div>
   
} else {
 search();
return "The App is Loading..."
}

}