import React from "react";
import "./CityInfo.css";

export default function CityInfo() {
  return (
    <div className="City">
      <h3>
        <br />
        <span className="city" id="city">
          Madrid
        </span>
      </h3>

      <h4>
        <hr />
        Sunday | Jan 10 | 21:03
      </h4>

      <div className="minMax">
        🌡
        <br />
        <br />
        13° / <b>15°</b>
      </div>

      <hr />
    </div>
  );
}
