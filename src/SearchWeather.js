import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import Icon1 from "./Icon1";
import Degrees from "./Degrees";



export default function SearchWeather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  
  
  function handleResponse(response) {
    setWeather({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      fahrenheit: (response.data.main.temp * 9) / 5 + 32,
    });
    setLoaded(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "829fcd3105a3bc78b07b8b3c45973e5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


 
  if (loaded) {
    return (
      <div>
        <br />
        <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={handleCityChange}
      />
      <input type="submit" value="🔍" />
    </form>
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
              <div className="float-center">
              <Icon1 code={weather.icon} size={80} />
              
                <br />
                <div className="details">
                  <ul>
                    <li>
                      Feels like:{" "}
                      <strong>{Math.round(weather.feels_like)}°C</strong>
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
          <br />
          <div className="City">
            <h3>
              <span className="city" id="city">
                {weather.city}
              </span>
            </h3>
            <h4>
              <hr />
              <FormattedDate date={weather.date} />
            </h4>
            <div className="minMax">
              🌡
              <br />
              <strong>
              <span className="temperature2" id="temperature2"><Degrees celsius={weather.temperature} /> </span>
              </strong>
            </div>
            <hr />
          </div>
          <WeatherForecast coord={weather.coord}/>
          <br />
          <br />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}