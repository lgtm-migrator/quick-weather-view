import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import { IStorageWeatherData } from '@/types/WeatherModel';

interface ITempWidget {
  weather: IStorageWeatherData;
}

export const TempWidget = ({ weather }: ITempWidget) => {
  return (
    <>
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl">{makeTempString(weather.main.temp)}</span>
        <div>
          <div className="flex items-center justify-center">
            <AiOutlineArrowUp className="text-orange-600" />
            {makeTempString(weather.main.temp_max)}
          </div>
          <div className="flex items-center justify-center">
            <AiOutlineArrowDown className="text-blue-600" />
            {makeTempString(weather.main.temp_min)}
          </div>
        </div>
      </div>
      <div>체감: {makeTempString(weather.main.feels_like)}</div>
    </>
  );
};

function makeTempString(temp: number) {
  return `${temp.toFixed()}℃`;
}
