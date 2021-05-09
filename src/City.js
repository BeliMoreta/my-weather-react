import React from "react";
import "./City.css";

export default function City() {
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
