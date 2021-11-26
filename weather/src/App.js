import logo from './logo.svg';
import React, { useState } from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home"
import Location from "./pages/Location"
import axios from 'axios';
import { useParams } from 'react-router';
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=416566bd01371ea788ab7923c2d01e4c
const API_BASE_URL= "https://api.openweathermap.org/data/2.5/weather";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLoaction] = useState(null);
  const search = async (e) =>{
    if(e.code === 'Enter'){
      setIsLoading(true);
      const url =API_BASE_URL+"?q="+inputValue+"&units=metric&appid=416566bd01371ea788ab7923c2d01e4c";
      console.log(url);
      const response = await axios.get(url);
      console.log(response);

      if(response){
        setLoaction(response.data);
      }
      setIsLoading(false);
    }
  }
  return (
    <div className="main">
      <NavBar search={search}
      inputValue ={inputValue}
      setInputValue = {setInputValue}
      ></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home inputValue={inputValue}/>}></Route>
          <Route path="/weather" element={ <Location locationData={location} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
