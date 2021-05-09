import React from "react";

import Search from "./Search";
import Button from "./Button";
import WeatherInfo from "./WeatherInfo";
import City from "./City";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Search />
      <Button />
      <WeatherInfo />
      <City />
    </div>
  );
}
