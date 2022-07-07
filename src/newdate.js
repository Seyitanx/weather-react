import React from "react";
import Weather from "./weather";
export default function NewDate(props) {
  
  
 
   
  let day = days[props.getDay()];
  let hour = props.getHour();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
   ]
    return (
      <div> {day}, {hour}:{minutes}</div>  
    )
}
