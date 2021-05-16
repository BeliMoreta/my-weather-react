import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import Button from "./Button";


export default function SearchWeather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    setMessage(`Weather in ${city} is:`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "829fcd3105a3bc78b07b8b3c45973e5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search for a city" onChange={updateCity} />
      <input type="submit" value="🔍" />
    </form>
  );

  if (loaded) {
    return (
      <div>
      {form}
      <br />
      <Button />
      <br />
      <div className="WeatherInfo">
      <div className="frame">
      <h1>
          <div className="degrees">
            <span className="temperature" id="temperature">
            <strong>{Math.round(weather.temperature)}°C</strong>
            </span>
            <span className="degreesTypes"></span>
          </div>
          <span className="description" id="temperature-description">
          <strong>{weather.description}</strong>
          </span>
          <div className="icono">
          <img src={weather.icon} alt={weather.description} />
            <br />
            <div className="details">
              <ul>
                <li>
                Feels like: <strong>{Math.round(weather.feels_like)}°C</strong>
                </li>
                <li>
                Wind: <strong>{weather.wind}km/h</strong>
                </li>
                <li>
                  
                  Humidity: <strong>{weather.humidity}%</strong>
                </li>
                <li>
                Pressure: <strong>{weather.pressure}Pa%</strong>
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>
    </div> 
    </div> 

    );
  } else {
    return form;
  }
}
