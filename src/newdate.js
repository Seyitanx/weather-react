import React from "react";

export default function NewDates(props) {
  
  let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
   ];
 
   
  let day = days[props.getDay()];
  let hour = props.getHour();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

    return (
      <div> {day} {hour}:{minutes}</div>  
    );
}