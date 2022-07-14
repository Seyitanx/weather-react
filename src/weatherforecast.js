import React from "react";
import WeatherIcon from "./weathericon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

function handleResponse(response) {
  console.log(response.data);
}

  let apiKey = "766d0f1b246ebf2848cd1e96c9ac9190";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
    );
    
}