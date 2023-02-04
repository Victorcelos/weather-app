import React, {useEffect, useState } from "react";

import './Weather.css';
import { getWeatherInfo } from "../../services/api/apiCall";
import { getCountryInfo } from "../../services/api/restCountries";

export const Weather = ({weatherData}) => {
    const [latitudeInfo] = useState(weatherData.lat);
    const [longitudeInfo] = useState(weatherData.lon);

    const [weatherInfo, setWeatherInfo] = useState();
    const [countryInfo, setCountryInfo] = useState();

    const getWeatherData = async () => {
        if (latitudeInfo && longitudeInfo) {
            const weatherInfo = await getWeatherInfo(latitudeInfo, longitudeInfo);
            setWeatherInfo(weatherInfo);
        }
    };

    const getCountryData = async () => {
        const countryInfo = await getCountryInfo(weatherData.country);
        setCountryInfo(countryInfo[0]);
    }

    const convertKelvinToCelsius = (kelvinValue) => {
        const celsiusValue = kelvinValue - 273.15;

        return celsiusValue.toFixed(0);
    }

    useEffect(() => {
        getWeatherData();
        getCountryData();
    }, []);

    return (
        <>
        <section className="main-section-info">
            <article className="info-article-one">
                <h1 className="article-one-title">{weatherData.name} - {countryInfo?.name?.common}</h1>
            </article>
            <article className="info-article-two">
                <div className="article-two-temperature">
                    <h2 className="temperature-value">{convertKelvinToCelsius(weatherInfo?.main?.temp)}º</h2>
                </div>
                <h2 className="weather-description">{weatherInfo?.weather[0]?.description}</h2>
            </article>
        </section>
        <section className="main-section-info" id="section-info-two">
            <div className="article-three-max">
                <h2 className="max-value">{convertKelvinToCelsius(weatherInfo?.main?.temp_max)}º</h2>
                <h2 className="max-title">High</h2>
            </div>
            <div className="article-three-min">
                <h2 className="max-value">{convertKelvinToCelsius(weatherInfo?.main?.temp_min)}º</h2>
                <h2 className="max-title">Low</h2>
            </div>
        </section>
        </>
    );
};