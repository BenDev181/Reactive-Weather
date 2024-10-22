import React from "react";
import Sunny from "../assets/Sunny.svg"
import Cloudy from "../assets/Cloudy.svg"
import PartlyCloudy from "../assets/PartlyCloudy.svg"
import Rainy from "../assets/Rainy.svg"

const forecastImages = {
  Sunny: Sunny,
  Cloudy: Cloudy,
  Rainy: Rainy,
  'Partly cloudy': PartlyCloudy,
  Snowy: Rainy
}


function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {forecastImages[props.data.forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard