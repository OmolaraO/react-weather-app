import React from "react";

export default function Weather() {
return <div className="Weather">
    <form>
        <div className="row">
        <div className="col-6">
        <input type="search" />
         </div>
        <div className="col-6">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
    </form>
<h1>Lagos</h1>
<ul>
    <li>Thursday 10:00</li>
    <li>Mostly Cloudy</li>
</ul>
<div className="row">
    <div className="col-6">
    <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" alt="cloudy-image" />
    8°C
    </div>
    <div className="col-6">
     <ul>
         <li>Precipitation: 15%</li>
         <li>Wind:13km/h</li>
         <li>Humidity: 72%</li>
         </ul>
         </div>   
    </div>
   </div>
   



       
    
}