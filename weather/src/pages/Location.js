// import React, {useState, useEffect} from 'react'
// import { useParams} from 'react-router';
import LocationWeather from '../components/LocationWeather'
// import axios from 'axios'
export default function Location({locationData}) {

    if(locationData){
        return (
            <div>
                <LocationWeather location={locationData} />
            </div>
        )
    }
    return (
        <div>

        </div>
    );
    
}
