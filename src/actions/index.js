import axios from 'axios';

const API_KEY = '<your open weather API key>';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function featchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
