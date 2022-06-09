import { IStorageCurrentWeatherData } from '@/types/WeatherModel';
import React from 'react';

interface IWeatherCard {
  weatherData: IStorageCurrentWeatherData;
}

const WeatherCard = ({ weatherData }: IWeatherCard) => {
  const { city, country, main, weather } = weatherData;
  return <div>WeatherCard</div>;
};

export default WeatherCard;

function makeTempString(temp: number) {
  return `${temp.toFixed()}℃`;
}
