import React, { useState } from 'react';

import { useCurrentWeather } from '@/hooks';
import { TempWidget } from '@/components/Widget/TempWidget';

const Weather = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast((prev) => !prev);

  const weather = useCurrentWeather();

  if (!weather) return null;

  return (
    <div className="absolute top-0 right-0">
      <button
        type="button"
        onClick={toggleShowToast}
        className="relative pt-3 pr-4 text-white cursor-pointer"
      >
        <div className="block text-xl opacity-90">{weather.city}</div>
        <div className="mt-[-2px] text-xl">{weather.weather.description}</div>
        <TempWidget weather={weather} />
        <div>
          <WeatherIcon icon={weather.weather.icon} />
        </div>
      </button>
      <Toast show={showToast} />
    </div>
  );
};

export default Weather;

interface IWeatherIcon {
  icon?: string;
}
const WeatherIcon = ({ icon = '' }: IWeatherIcon) => {
  return icon !== '' ? (
    <img
      className="w-8 align-middle"
      alt="weather icon"
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
    />
  ) : null;
};

interface IToast {
  show: boolean;
}

const Toast = ({ show }: IToast) => {
  if (!show) return null;
  return <h1>Toast</h1>;
};
