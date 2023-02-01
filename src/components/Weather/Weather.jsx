import React, {useEffect, useState } from "react";
import { getWeatherInfo } from "../../services/apiCall";
import { getCountryInfo } from "../../services/restCountries";

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

    useEffect(() => {
        getWeatherData();
        getCountryData();
    }, []);

    console.log(weatherData);
    console.log(countryInfo);

    return (
        <section className="main-section-info">
            <article className="info-article-one">
                <h1 className="article-one-title">{weatherData.name} - {countryInfo?.name?.common}</h1>
            </article>
            <article className="info-article-two">

            </article>
        </section>
    );
};