import React, {useState} from "react";

export default function Degrees(props){

     const [unit, setUnit] = useState("celsius")

      function showFahrenheit(event){
          event.preventDefault();
          setUnit("fahrenheit");

        }

        function showCelsius(event){
            event.preventDefault();
          setUnit("celsius");

        }
        function fahrenheit(){

            return (props.celsius *9/5) + 32
        }
        
     if ( unit === "celsius"){
        return( 
           <div className="Degrees">
           <span className="weather-temp" id="temperature"></span>
             <span className="temperature">{Math.round(props.celsius)}</span>
           
             <span className="unit">
               <span className="weather-deg">
               °C |<a href="/" id="fahrenheit-link" className="active" onClick={showFahrenheit}>
                  °F </a>
            </span>
            </span>
           </div>

         );

        }else{
          
           return (
           <div className="Degrees">
            <span className="weather-temp" id="temperature"></span>
              <span className="temperature">{Math.round(fahrenheit())}</span>
            
              <span className="unit">
               <span className="weather-deg">
               <a href="/" id="celsius-link" className="active" onClick={showCelsius}> 
                  °C
               </a> 
                  |°F {" "}
            </span>
            </span>
           </div>
         );

        
     }
    
}