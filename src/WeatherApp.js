import React from "react";
import SearchWeather from "./SearchWeather";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchWeather defaultCity="Madrid"/>
    </div>
  );
}
