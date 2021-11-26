import React, {useState, useEffect }from 'react'
import axios from "axios";
import "../styles/LocationWeather.css"
import sun from "../media/sun.gif"
import Chart from './Chart';
export default function Forecast({lon, lat}) {
    const API_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall"
    // https://api.openweathermap.org/data/2.5/onecall?lat=29.94&lon=78.16&exclude=minutely,hourly&appid=97daec00a855f225882874c00874d275
    
    const [forecastData, setForecastData] = useState(null);
    const [ isLoading, setIsLoading] = useState(true);

    useEffect( async ()=>{
        console.log("forecast")
        const url = API_BASE_URL + "?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=metric&appid=97daec00a855f225882874c00874d275"; 
        const response = await axios.get(url);
        console.log(response);
        if(response){
            setForecastData(response);
        }
        setIsLoading(false);
    },[lon, lat]);
    
    if(forecastData){
        const dt=[];
        let today = new Date();
        var xValues=[1, 2, 3, 4, 5, 6, 7];
        var yMaxValues=[];
        var yMinValues=[];
        for(let i=0; i<7; i++){
            today.setDate(today.getDate() + 1);
            dt.push(today.toDateString());
            yMaxValues.push(forecastData.data.daily[i+1].temp.max);
            yMinValues.push(forecastData.data.daily[i+1].temp.min)
        }
        return (
        
            <div >
                <h2>ForeCast</h2>
                <div className="flex-container">
                    <div>
                        {forecastData.data.daily[1].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[1].temp.max}/{forecastData.data.daily[1].temp.min}॰C</div>
                        <div>{dt[0]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[2].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[2].temp.max}/{forecastData.data.daily[2].temp.min}॰C</div>
                        <div>{dt[1]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[3].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[3].temp.max}/{forecastData.data.daily[3].temp.min}॰C</div>
                        <div>{dt[2]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[4].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[4].temp.max}/{forecastData.data.daily[4].temp.min}॰C</div>
                        <div>{dt[3]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[5].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[5].temp.max}/{forecastData.data.daily[5].temp.min}॰C</div>
                        <div>{dt[4]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[6].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[6].temp.max}/{forecastData.data.daily[6].temp.min}॰C</div>
                        <div>{dt[5]}</div>
                    </div>
                    <div>
                        {forecastData.data.daily[7].weather[0].main}
                        <div><img src={sun} className="forecast-sun"></img></div>
                        <div>{forecastData.data.daily[7].temp.max}/{forecastData.data.daily[7].temp.min}॰C</div>
                        <div>{dt[6]}</div>
                    </div>
                </div>

                <div>
                    {/* <Chart xValues={xValues} yMaxValues={yMaxValues} yMinValues={yMinValues}/> */}
                </div>
            </div>
        )
    }
    return(
        <div>
            <h2>No ForeCast...</h2>
        </div>
    )
    
}
