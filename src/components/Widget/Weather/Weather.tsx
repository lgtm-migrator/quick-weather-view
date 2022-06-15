import React from 'react';

import { useAllWeather } from '@/hooks';
import Button from '@/components/Common/Button/Button';
import CurrentWeather from '@/components/Widget/Weather/CurrentWeather';
import ErrorBoundary from '@/components/Common/Fetching/ErrorBoundary';

const Weather = () => {
  const { hourlyWeatherData, dailyWeatherData } = useAllWeather();

  return (
    <div className="flex flex-col items-center justify-center mt-10 text-white">
      <ErrorBoundary
        resetKeys={[hourlyWeatherData, dailyWeatherData]}
        renderFallback={({ error, reset }) => (
          <div className="flex flex-col items-center justify-start">
            <h2 className="mb-1 text-xl">현재 날씨 정보를 가져오는 데 실패했어요 🥺</h2>
            <Button type="button" onClick={reset} theme="primary">
              다시 시도할래요
            </Button>
          </div>
        )}
      >
        <CurrentWeather />
      </ErrorBoundary>
    </div>
  );
};

export default Weather;
