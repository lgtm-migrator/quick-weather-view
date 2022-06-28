import React from 'react';

import { UnstyledLink } from '@/components/Common/UnstyledLink/UnstyledLink';
import { useBackgroundWeatherPhoto } from '@/hooks';
import { IStorageCurrentWeatherData, WeatherType } from '@/types/WeatherModel';

// @TODO 이미지 색상 추출 후, 메인 색상에 따라 폰트 색 결정하는 코드 작성하기
const Background = ({ weather }: Partial<IStorageCurrentWeatherData>) => {
  const windowWidth = window.innerWidth;
  const { image, link, author } = useBackgroundWeatherPhoto(weather?.main ?? WeatherType.Unknown);

  return (
    <div className="w-full h-screen">
      <img
        draggable="false"
        src={`${image}?auto=format&fit=crop&w=${windowWidth}&q=80`}
        className="object-cover w-full h-full"
        alt="background"
      />
      <UnstyledLink
        external
        url={link}
        className="absolute bottom-0 z-10 pb-1 pl-1 text-sm cursor-pointer"
      >
        <div className="flex flex-col">
          <span>author: {author}</span>
          <span>link: {link}</span>
        </div>
      </UnstyledLink>
    </div>
  );
};

export default Background;
