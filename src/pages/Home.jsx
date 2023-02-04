import React, { useEffect, useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Weather } from "../components/Weather/Weather";
import { getWeatherInfoByName } from "../services/api/apiCall";

const Home = () => {
    const [cityName, setCityName] = useState();
    const [weatherData, setWeatherData] = useState();

    const getWeatherByName = async () => {
        if (cityName != undefined) {
            const weatherInfo = await getWeatherInfoByName(cityName);
            setWeatherData(weatherInfo);
        }
    }

    useEffect(() => {
        getWeatherByName();
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
            {!weatherData 
            ? <h1 className="main-title-message">Search for a city to get its information</h1> 
            : <Weather weatherData={weatherData[0]} />}
        </main>
        <Footer />
        </>
    );
};

export default Home;