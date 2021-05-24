import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import Button from "./Button";
import FormattedDate from "./FormattedDate";


export default function SearchWeather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      fahrenheit: ((response.data.main.temp * 9) / 5 + 32)
    });
    setLoaded(true);
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
      <br />
      <Button />
      <br />
      <div className="WeatherInfo">
      <div className="frame">
      <h1>
          <div className="degrees">
            <span className="temperature" id="temperature">
            <strong>15°C</strong>
            </span>
            <span className="degreesTypes"></span>
          </div>
          <span className="description" id="temperature-description">
          <strong>Cloudy</strong>
          </span>
          <div className="icono">
           ☁
            <br />
            <div className="details">
              <ul>
                <li>
                Feels like: <strong>12°C</strong>
                </li>
                <li>
                Wind: <strong>2.24km/h</strong>
                </li>
                <li>
                  
                  Humidity: <strong>40%</strong>
                </li>
                <li>
                Pressure: <strong>1002Pa%</strong>
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>

      <div className="City">
      <h3>
        <span className="city" id="city">
        Madrid
        </span>
      </h3>
      <h4>
        <hr />
        Sunday 21:15
      </h4>
      <div className="minMax">
        🌡
        <br />
        <br />
        <strong>15°C / 58F</strong>
      </div>

      <hr />
    </div>
    </div> 
    </form>
  );

  if (loaded) {
    return (
      <div>
      <input type="search" placeholder="Search for a city" onChange={updateCity} />
      <input type="submit" value="🔍" />
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
        <br />
        <strong>{Math.round(weather.temperature)}°C / {Math.round(weather.fahrenheit)}F</strong>
      </div>

      <hr />
    </div>
    </div> 
    </div> 

    );
  } else {
    return form;
  }
}
