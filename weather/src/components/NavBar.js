import React from 'react'
import "../styles/NavBar.css"
import weather_main_icon from "../media/weather-main-icon.png";
// import { Link } from 'react-router-dom';

export default function NavBar({setInputValue, inputValue, search}) {
    
    return (
        <div className="navbar">
            <div className="logo-name">
            <img src={weather_main_icon} className="weather-main-icon" alt=""></img>
            <h2>Wind Weather</h2>
            </div>
            
            <input type="text" placeholder="Search" className="navbar-input"
            onChange={(e)=>{
                setInputValue(e.target.value);
            }}
            onKeyPress={search}></input>
            {/* onKeyPress={ <Link to={`/${inputValue}`}></Link>} */}
            {/* ></input> */}
        </div>

    )
}
