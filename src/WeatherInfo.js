import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
return(
 <div>
    <h1>{props.data.city}</h1>
<ul>
<li> <FormattedDate date={props.data.date} />
</li>

<li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row">
<div className="col-6">
<div className="clearfix">
<div className="float-left">
<WeatherIcon code={props.data.icon} size={60} />
</div>
<div className="float-left">
<WeatherTemperature celsius = {props.data.temperature}/>    
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