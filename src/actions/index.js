import axios from "axios";

const API_KEY = "aec44afa48c3d9b75962a6f1fe1ad4d0";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us&units=metric`;
    const request = axios.get(url);

    return {

        type: FETCH_WEATHER,
        payload: request
    };

}

