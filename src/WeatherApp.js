import React from "react";


import Button from "./Button";
import WeatherInfo from "./WeatherInfo";
import City from "./City";
import SearchWeather from "./SearchWeather";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchWeather />

      <City />
    </div>
  );
}
