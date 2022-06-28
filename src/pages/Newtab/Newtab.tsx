import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Background } from '@/components';
import { GlobalModal } from '@/components/Common/Modal/GlobalModalProvider';
import Weather from '@/components/Widget/Weather/Weather';
import Clock from '@/components/Widget/Clock';
import QuickLinkView from '@/components/Widget/QuickLink/QuickLinkList';
import { useCurrentWeather } from '@/hooks';

const Newtab = () => {
  const weatherData = useCurrentWeather();

  if (!weatherData) return null;

  return (
    <GlobalModal>
      <ToastContainer
        containerId="quick-weather-view"
        draggable={false}
        pauseOnHover
        autoClose={4000}
        position="top-right"
        closeButton={true}
      />
      <div className="min-h-screen text-100 font-roboto">
        <Background weather={weatherData.weather} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative">
            <Weather />
            <Clock />
            <QuickLinkView />
          </div>
        </div>
      </div>
    </GlobalModal>
  );
};

export default Newtab;
