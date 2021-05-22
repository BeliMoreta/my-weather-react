import React from "react";
import CityInfo from "./CityInfo";
import SearchWeather from "./SearchWeather";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchWeather />

      <CityInfo />
    </div>
  );
}
