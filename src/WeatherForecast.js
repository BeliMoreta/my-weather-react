import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true);
}
    
if(loaded) {
    return (
    <div className="WeatherForecast">
    <div className="row">
    <div className="col">
        <div>Thu</div>
        <div>☁</div>
        <div>${forecast[0].temp.max}°/<strong>23°</strong></div>
    </div>
    </div>
</div>
    );
    
} else {
    let apiKey = "829fcd3105a3bc78b07b8b3c45973e5b";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    
    axios.get(apiUrl).then(handleResponse);

    return null;

}

}