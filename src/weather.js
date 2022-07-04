import React from "react";

import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="card-cover">
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
     < div id="current-city"></div>
            <ul>
              <li id="the-date"></li>
              <li id="cloud-description"></li>
            </ul>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="weather-temperature">
                <ul>
                  <li>
                    <strong id="current-degree"></strong>
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
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span>m/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
