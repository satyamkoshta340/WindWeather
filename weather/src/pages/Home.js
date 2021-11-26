import React from 'react'
import { Link } from 'react-router-dom'
import sunny from '../media/sunny.gif'
export default function Home({inputValue}) {
    if(inputValue != ""){
        return (
            <Link to= "/weather"  >
                <div>
                    <img className="gif" src={sunny}></img>
                </div>
            </Link>
        )
    }
    else return (
        <div>
            <img className="gif" src={sunny}></img>
        </div>
    );
    
}
