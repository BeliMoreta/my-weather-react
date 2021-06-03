import './App.css';
import WeatherApp from "./WeatherApp";
import SearchWeather from "./SearchWeather";


function App() {
  return (
     <div className="container">
        <WeatherApp />
        

        <h6>
          <span className="copyright">© Coded by BeliMoreta</span>
          <br></br>
        <a href="https://github.com/BeliMoreta/my-weather-react">GitHub</a>
        </h6>
      </div>
   
  );
}


export default App;
