export const getCountryInfo = async (countryCode) => {
    const API_URL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    const fetchResponse = await fetch(API_URL);
    return await fetchResponse.json();
}