// import React, {useState, useEffect} from 'react'
// import { useParams} from 'react-router';
import LocationWeather from '../components/LocationWeather'
// import axios from 'axios'
export default function Location({locationData}) {

    if(locationData){
        return (
            <div>
                <LocationWeather lat={locationData.coord.lat} lon = {locationData.coord.lon} name ={locationData.name}/>
            </div>
        )
    }
    return (
        <div>

        </div>
    );
    
}
