import React, { useState } from "react";
import WeatherInfo from "./weatherinfo";
import WeatherForecast from "./weatherforecast";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
let [weatherData, setweatherData] = useState({ready: false});
let[city, setcity]= useState(props.city)
function handleResponse(response) {
  
setweatherData(
  {
    ready: true,
    temperature:response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind:response.data.wind.speed,
    city: response.data.name,
date: new Date(response.data.dt * 1000),
icon: response.data.weather[0].icon

  }
);
 
}


function search() {
  let apiKey = "766d0f1b246ebf2848cd1e96c9ac9190";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}


function handleChange(event) {
  setcity(event.target.value);
}
 

  if (weatherData.ready) {
     return (
       <div className="container">
         <div className="back-card">
           <form id="search-form" onSubmit={handleSubmit}>
             <input
               type="text"
               placeholder="Enter City"
               autofocus="on"
               id="search-input"
               onChange={handleChange}
             />
             <input
               type="submit"
               value="Search"
               className="button"
               id="new-button"
             />
           </form>
           <WeatherInfo data={weatherData} />
           <WeatherForecast />
         </div>
       </div>
     );
  } else {
     search();
  }

 
}