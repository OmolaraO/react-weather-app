import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
return(
 <div>
    <h1>{props.data.city}</h1>
<ul>
<li> <formattedDate date={props.data.date} />
</li>
  <FormattedDate date= {new Date()} /> 
<li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row">
<div className="col-6">
<div className="clearfix">
<img src= {props.data.iconUrl} alt= {props.data.description}
className="float-left"
/>
<div className="float-left">
 <span className="temperature">{Math.round(props.data.temperature)}</span> 
 <span className="unit">°C</span> 
 </div>
 </div>
    </div>
    <div className="col-6">
     <ul>
         <li>Wind: {props.data.wind}km/h</li>
         <li>Humidity: {props.data.humidity} %</li>
         </ul>
         </div>   
    </div>
    </div>   
);
}