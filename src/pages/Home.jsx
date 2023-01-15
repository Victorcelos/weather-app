import React, { useEffect, useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { getWeatherInfo } from "../services/apiCall";

const Home = () => {
    const [cityName, setCityName] = useState("");
    const [userLatitude, setUserLatitude] = useState();
    const [userLongitude, setUserLongitude] = useState();

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

    const getUserWeatherInfo = async () => {
        if (userLatitude != undefined && userLongitude != undefined) {
            const weatherInfo = await getWeatherInfo(userLatitude, userLongitude);
        }
    }
    
    useEffect(() => {
        getGeolocationInfo();
        getUserWeatherInfo();
    });


    return (
        <>
        <Header />
        <main className="main">
            <section className="main-section-search">
                <input type="text" className="search-input-name" 
                placeholder="Search for a city..." onChange={(event) => setCityName(event.target.value)} />
                <button className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Home;