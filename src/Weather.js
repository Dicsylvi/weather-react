import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
  
  function handleResponse(response) {
alert (` The weather in ${response.data.name}  is ${response.data.main.temp}℃`);
}
 let apiKey = "d8d17f84ce9aabb3a7583207cdad5dd3"
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
  
   axios.get(apiUrl).then(handleResponse);
  return  (
  <Loader type="Grid"
   color="orange"
    height={80} 
    width={80} />
    );
 }
