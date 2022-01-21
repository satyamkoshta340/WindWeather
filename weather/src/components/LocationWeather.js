import React from 'react'
import "../styles/LocationWeather.css"
// import {Cloudy, Sunny, THunderStorm,Clear} from "../media"
// import Cloudy from "../media/cloudy.gif"
import Forecast from './Forecast'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function LocationWeather({lat, lon, name}) {

    const API_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";
    const [data, setData] = useState(null);

    useEffect( async ()=>{
        const url = API_BASE_URL + "?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=metric&appid=97daec00a855f225882874c00874d275"; 
        const response = await axios.get(url);
        console.log(response.data);
        if(response){
            setData(response.data);
        }
    },[lon, lat]);

    if(data){
    const dt = new Date();
    return (
        <div>
            <div className="flex-container">
                <div className="temp">{data.current.temp}॰C</div>
                <div>
                    <div className="name">{name}, {data.current.weather[0].main}</div>
                    <div> {dt.toDateString()}</div>
                </div>
                
            </div>
            
            <div className="details flex-container">
                <div>
                    <div >Max Temp: {data.daily[0].temp.max}</div>
                    <div >Min Temp: {data.daily[0].temp.min}</div>
                </div>
                <div>
                    <div>Wind Speed: {data.daily[0].wind_speed}m/s</div>
                    <div>Humidity: {data.daily[0].humidity}%</div>
                </div>
                <div>
                    <div> Longitude: {lon}</div>
                    <div> Latitude: {lat}</div>
                </div>
            </div>
            <Forecast lon={lon} lat={lat}/>
            {/* <img src={Cloudy} className="gif"></img> */}
        </div>
    )
    }
    else{
        return(
            <div></div>
        )
    }
    
}
