import React from 'react'
import "../styles/LocationWeather.css"
// import {Cloudy, Sunny, THunderStorm,Clear} from "../media"
import Cloudy from "../media/cloudy.gif"
import Forecast from './Forecast'

export default function LocationWeather({location}) {
    const dt = new Date();
    return (
        <div>
            <div className="flex-container">
                <div className="temp">{location.main.temp}॰C</div>
                <div>
                    <div className="name">{location.name}, {location.weather[0].main}</div>
                    <div> {dt.toDateString()}</div>
                </div>
                
            </div>
            
            <div className="details flex-container">
                <div>
                    <div >Max Temp: {location.main.temp_max}</div>
                    <div >Min Temp: {location.main.temp_min}</div>
                </div>
                <div>
                    <div>Wind Speed: {location.wind.speed}m/s</div>
                    <div>Humidity: {location.main.humidity}%</div>
                </div>
                <div>
                    <div> Longitude: {location.coord.lon}</div>
                    <div> Latitude: {location.coord.lat}</div>
                </div>
            </div>
            <Forecast lon={location.coord.lon} lat={location.coord.lat}/>
            {/* <img src={Cloudy} className="gif"></img> */}
        </div>
    )
}
