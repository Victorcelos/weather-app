import React, {useEffect, useState } from "react";
import { getWeatherInfo } from "../../services/apiCall";

export const Weather = ({weatherData}) => {
    const [latitudeInfo] = useState(weatherData.lat);
    const [longitudeInfo] = useState(weatherData.lon);
    const [weatherInfo, setWeatherInfo] = useState();

    const getWeatherData = async () => {
        if (latitudeInfo && longitudeInfo) {
            const weatherInfo = await getWeatherInfo(latitudeInfo, longitudeInfo);
            setWeatherInfo(weatherInfo);
        }
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    console.log(weatherData)

    return (
        <section className="main-section-info">
            <article className="info-article-one">
                <h1 className="article-one-title">{weatherData.name} - </h1>
            </article>
            <article className="info-article-two">

            </article>
        </section>
    );
};