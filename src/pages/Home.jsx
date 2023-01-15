import React, { useEffect, useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Weather } from "../components/Weather/Weather";
import { getWeatherInfo, getWeatherInfoByName } from "../services/apiCall";

const Home = () => {
    const [cityName, setCityName] = useState();
    const [weatherData, setWeatherData] = useState();
    const [userLatitude, setUserLatitude] = useState();
    const [userLongitude, setUserLongitude] = useState();
    const [weatherGeolocation, setWeatherGeolocation] = useState();

    const getGeolocationInfo = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLatitude(position.coords.latitude);
                setUserLongitude(position.coords.longitude);
            });
        } else {
            console.log("Geolocation is not supported by this browser");
        }
    };

    const getWeatherByName = async () => {
        if (cityName != undefined) {
            const weatherInfo = await getWeatherInfoByName(cityName);
            setWeatherData(weatherInfo);
        }
    }

    const getWeatherByUserCoords = async () => {
        if (userLatitude != undefined && userLongitude != undefined) {
            const weatherInfo = await getWeatherInfo(userLatitude, userLongitude);
            setWeatherGeolocation(weatherInfo);
        }
    }
    
    useEffect(() => {
        getGeolocationInfo();
        getWeatherByUserCoords();
    }, []);

    return (
        <>
        <Header />
        <main className="main">
            <section className="main-section-search">
                <input type="text" className="search-input-name" 
                placeholder="Search for a city..." onChange={(event) => setCityName(event.target.value)} />
                <button className="search-button" onClick={() => getWeatherByName()}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
            {!weatherData ? <Weather weatherData={weatherGeolocation} /> : <Weather weatherData={weatherData[0]} />}
        </main>
        <Footer />
        </>
    );
};

export default Home;