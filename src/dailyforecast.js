import React from "react";
import WeatherIcon from "./weathericon";

export default function DailyForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
