// import axios from 'axios';

// const API_KEY = import.meta.env.VITE_API_KEY;

// export async function getWeatherData(endpoint, place_id, measurementSystem) {
//     const options = {
//         method: 'GET',
//         url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
//         params: {
//             place_id,
//             language: 'en',
//             units: measurementSystem,
//         },
//         headers: {
//             'x-rapidapi-key': API_KEY,
//             'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
//         },
//     };

//     try {
//         const response = await axios.request(options);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// export async function searchPlaces(text) {
//     const options = {
//         method: 'GET',
//         url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
//         params: {
//             text,
//             language: 'en',
//         },
//         headers: {
//             'x-rapidapi-key': API_KEY,
//             'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
//         },
//     };

//     try {
//         const response = await axios.request(options);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }





// If the API doesn't work then we'd use this dummy API

// Start =>

import currentWeather from "./current-weather.json";
import dailyWeather from "./daily-forecast.json";
import hourlyWeather from "./hourly-forecast.json";

export async function getWeatherData(endpoint: string, place_id: string, measurementSystem: string) {
    if (endpoint === "hourly") {
        return hourlyWeather;
    } else if (endpoint === "daily") {
        return dailyWeather;
    } else if (endpoint === "current") {
        return currentWeather;
    } else {
        throw new Error("Invalid endpoint. Choose from 'hourly', 'daily', or 'current'.");
    }
}


export async function searchPlaces(text: string) {
    return response;
}

// End <=