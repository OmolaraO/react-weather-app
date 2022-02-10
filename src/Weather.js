import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
 const [weatherData, setWeatherData]  = useState({ready: false });   
function handleResponse(response) {     
setWeatherData({
ready: true,
temperature: response.data.main.temp,
city: response.data.name,
date: "Thursday 10:00",
iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity
});

}

if(weatherData.ready) {
return <div className="Weather">
    <form>
        <div className="row">
        <div className="col-6">
        <input type="search" placeholder="type a city"
        autoFocus="on"
        />
         </div>
        <div className="col-6">
        <input type="submit" value="Search" className="btn btn-primary w-80"/>
        </div>
        </div>
    </form>
<h1>{weatherData.city}</h1>
<ul>
<li>{weatherData.date}</li>
<li className="text-capitalize">{weatherData.description}</li>
</ul>
<div className="row">
<div className="col-6">
<div className="clearfix">
<img src= {weatherData.iconUrl} alt= {weatherData.description}
className="float-left"
/>
<div className="float-left">
 <span className="temperature">{Math.round(weatherData.temperature)}</span> 
 <span className="unit">°C</span> 
 </div>
 </div>
    </div>
    <div className="col-6">
     <ul>
         <li>Wind: {weatherData.wind}km/h</li>
         <li>Humidity: {weatherData.humidity} %</li>
         </ul>
         </div>   
    </div>
   </div>
} else {
 let apiKey = "baf56f4471be4826660e97693ea45c45";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "The App is Loading..";
}
   
}