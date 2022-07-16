import React, { useState } from "react";

import DailyForecast from "./dailyforecast";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (weatherForecast, index) {
            if ( index < 5){return (
              <div className="col" key={index}>
                <DailyForecast data={weatherForecast} />
              </div>
            );}
            
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "766d0f1b246ebf2848cd1e96c9ac9190";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
