const API_KEY = '5c6c41e87abfc3793b4b4fd3bff1da12';

export const getWeatherInfo = async (lat, lon) => {
    console.log(lat)
    console.log(lon)
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const fetchResponse = await fetch(API_URL);
    return await fetchResponse.json();
};

export const getWeatherInfoByName = async (name) => {
    const API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`;

    const fetchResponse = await fetch(API_URL);
    return await fetchResponse.json();
}