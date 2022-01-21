import React from 'react'
import { Link } from 'react-router-dom'
import sunny from '../media/sunny.gif'
import "../styles/Home.css";
export default function Home({inputValue}) {
    if(inputValue !== ""){
        return (
            <div>
                <Link to= "/weather"  >
                <div>
                    <img className="gif" src={sunny} alt=" "></img>
                </div>
                </Link>
                <div className="home-detail"> 
                    <p>Welcome To the Wind Weather...</p>
                    <p>Type the name of City for which you want to check weather, Hit Enter</p>
                    <p>Now click on the Shiny SUN</p>
                </div>
            </div>
            
        )
    }
    else return (
        <div>
            <img className="gif" src={sunny} alt="WIND"></img>
            <div className="home-detail"> 
                <p>Welcome To the Wind Weather...</p>
                <p>Type the name of City for which you want to check weather, Hit Enter</p>
                <p>Now click on the Shiny SUN</p>
             </div>
        </div>
    );
    
}
