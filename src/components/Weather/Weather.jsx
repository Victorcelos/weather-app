import React, { useEffect, useState } from "react";
import { getWeatherInfo } from "../../services/apiCall";

export const Weather = ({weatherData}) => {
    console.log(weatherData);
    const [weatherInfo, setWeatherInfo] = useState();
    const [weatherLatitude, setWeatherLatitude] = useState();
    const [weatherLongitude, setWeatherLongitude] = useState();

    return (
        <section className="main-section-info">

        </section>
    );
};