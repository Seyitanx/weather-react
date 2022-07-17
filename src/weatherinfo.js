import React from "react";
import WeatherIcon from "./weathericon";
import NewDate from "./newdate";


export default function WeatherInfo(props) {
    return(
        <div className="weather-overview">

              <h1>{props.data.city}</h1>
             <ul>
               <li id="the-date">
                <NewDate date={props.data.date} />
               </li>
               <li id="cloud-description">{props.data.description}</li>
             </ul>
          

           
            
               <div className="weather-temperature">
            <div className="degree"><ul>
                   <li>
                     <strong id="current-degree">
                       {Math.round(props.data.temperature)}
                     </strong>
                     <span className="units">℃</span>
                   </li>
                 </ul>
                 <div className="cloud-icon"
                   alt="weather-icon">
                
                 <WeatherIcon code={props.data.icon} size= {44}/>
                 </div>
            </div>
                 
             </div>
             <div className="humiditywind">
               <ul>
                 <li className="humidity">
                   Humidity: <span id="humidity">{props.data.humidity}</span>%
                 </li>
                 <li className="wind">
                   Wind: <span id="wind">{Math.round(props.data.wind)}</span>m/h
                 </li>
               </ul>
             </div>
           </div>
           
         
    );
}