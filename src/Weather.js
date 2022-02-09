import React from "react";

export default function Weather() {
return <div className="Weather">
    <form>
        <div className="row">
        <div className="col-6">
        <input type="search" 
        autoFocus="on"
        />
         </div>
        <div className="col-6">
        <input type="submit" value="Search" className="btn btn-primary w-80"/>
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
<div className="clearfix">
<img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" alt="cloudy-icon"
className="float-left"
/>
<div className="float-left">
 <span className="temperature">8</span> 
 <span className="unit">°C</span> 
 </div>
 </div>
    </div>
    <div className="col-6">
     <ul>
         <li>Precipitation: 15%</li>
         <li>Wind: 13km/h</li>
         <li>Humidity: 72%</li>
         </ul>
         </div>   
    </div>
   </div>
   



       
    
}