import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Searcher">
      <form id="search-form">
        <input
          type="text"
          placeholder="Search for a city"
          autocomplete="off"
          autofocus="on"
          id="search-text-input"
        />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
}
