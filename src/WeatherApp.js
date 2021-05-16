import React from "react";



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
