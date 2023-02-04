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
    };

    const convertKelvinToCelsius = (kelvinValue) => {
        const celsiusValue = kelvinValue - 273.15;

        return celsiusValue.toFixed(0);
    };

    const convertUnixToUTC = (timestamp) => {
        const newDate = new Date(timestamp * 1000);
        const hoursUTC = newDate.getUTCHours();
        const minutesUTC = newDate.getUTCMinutes();

        return hoursUTC + ":" + minutesUTC;
    };

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
        <section className="main-section-info" id="section-info">
            <div className="article-info">
                <h2 className="article-value">{convertKelvinToCelsius(weatherInfo?.main?.temp_max)}º</h2>
                <h2 className="article-title">High</h2>
            </div>
            <div className="article-info">
                <h2 className="article-value">{convertKelvinToCelsius(weatherInfo?.main?.temp_min)}º</h2>
                <h2 className="article-title">Low</h2>
            </div>
            <div className="article-info">
                <h2 className="article-value">{convertKelvinToCelsius(weatherInfo?.main?.feels_like)}º</h2>
                <h2 className="article-title">F. Like</h2>
            </div>
            <div className="article-info">
                <h2 className="article-value">{weatherInfo?.main?.humidity} %</h2>
                <h2 className="article-title">Humidity</h2>
            </div>
        </section>
        <section className="main-section-info" id="section-info">
            <div className="article-info">
                <h2 className="article-value">{weatherInfo?.wind?.speed} M/s</h2>
                <h2 className="article-title">Wind</h2>
            </div>
            <div className="article-info">
                <h2 className="article-value">{convertUnixToUTC(weatherInfo?.sys?.sunrise)}</h2>
                <h2 className="article-title">Sunrise</h2>
            </div>
            <div className="article-info">
                <h2 className="article-value">{convertUnixToUTC(weatherInfo?.sys?.sunset)}</h2>
                <h2 className="article-title">Sunset</h2>
            </div>
        </section>
        </>
    );
};