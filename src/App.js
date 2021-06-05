import React from "react";
import './App.css';
import SearchWeather from "./SearchWeather";




function App() {
  return (
     <div className="container">
       <div className="App">
      <SearchWeather defaultCity="Madrid"/>
    </div>
    <div className="ContactInfo">
        <h6>
          <span className="copyright">© Coded by BeliMoreta</span>
          <br></br>
        <a href="https://github.com/BeliMoreta/my-weather-react">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/isabel-aguado-moreta-101a69126/">Linkedin</a>
        </h6>
      </div>
      </div>
   
  );
}

export default App;
