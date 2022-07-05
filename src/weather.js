import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
let [weatherData, setweatherData] = useState({ready: false});
function handleResponse(response) {
  console.log(response);
setweatherData(
  {
    ready: true,
    temperature:response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind:response.data.wind.speed,
    city: response.data.name

  }
);



  
}

 

  if (weatherData.ready) {
     return (
       <div className="container">
         <div className="back-card">
           <form id="search-form">
             <input
               type="text"
               placeholder="Enter City"
               autofocus="on"
               id="search-input"
             />
             <input
               type="submit"
               value="Search"
               className="button"
               id="new-button"
             />
           </form>
           <div className="weather-overview">
             <div id="current-city"> <h1>{weatherData.city}</h1></div>
             <ul>
               <li id="the-date"></li>
               <li id="cloud-description">{weatherData.description}</li>
             </ul>
           </div>

           <div className="row">
             <div className="col-sm-6">
               <div className="weather-temperature">
                 <ul>
                   <li>
                     <strong id="current-degree">
                       {Math.round(weatherData.temperature)}
                     </strong>
                     <span className="units">℃</span>
                   </li>
                 </ul>
                 <img
                   src=""
                   id="icon"
                   className="cloud-icon"
                   alt="weather-icon"
                 />
               </div>
             </div>
             <div className="col-sm-6">
               <ul>
                 <li>
                   Humidity: <span id="humidity">{weatherData.humidity}</span>%
                 </li>
                 <li>
                   Wind: <span id="wind">{weatherData.wind}</span>m/h
                 </li>
               </ul>
             </div>
           </div>
           <div className="weather-forecast" id="forecast"></div>
         </div>
       </div>
     );
  } else {
     let apiKey = "766d0f1b246ebf2848cd1e96c9ac9190";
     let city = "lagos";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
  }

 
}