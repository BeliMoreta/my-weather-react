import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);
}
console.log(props);

    let apiKey = "829fcd3105a3bc78b07b8b3c45973e5b";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

    axios.get(apiUrl).then(handleResponse);

    return <div className="WeatherForecast">
    <div className="row">
    <div className="col">
        <div>Thu</div>
        <div>☁</div>
        <div>19°/<strong>23°</strong></div>
    </div>
    </div>
</div>

}