import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="frame">
        <h1>
          <div className="degrees">
            <span className="temperature" id="temperature">
              3°C
            </span>
            <span className="degreesTypes"></span>
          </div>
          <span className="description" id="temperature-description">
            Cloudy
          </span>
          <div className="icono">
            ☁
            <br />
            <div className="details">
              <ul>
                <li>
                  <b>Feels like: </b>
                  <span id="feels"></span> 12°C
                </li>
                <li>
                  <b>Wind: </b>
                  <span id="wind"> </span> 1 km/h
                </li>
                <li>
                  <b>Humidity: </b>
                  <span id="humidity"></span>38%
                </li>
                <li>
                  <b>Pressure: </b>
                  <span id="pressure"> </span> 1022 Pa%
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}
