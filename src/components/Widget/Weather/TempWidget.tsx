import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

interface ITempWidget {
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export const TempWidget = ({ feels_like, temp, temp_max, temp_min }: ITempWidget) => {
  return (
    <>
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl">{makeTempString(temp)}</span>
      </div>
      <div>체감: {makeTempString(feels_like)}</div>
      <div>
        <div className="flex items-center justify-center">
          <AiOutlineArrowUp className="text-orange-600" />
          {makeTempString(temp_max)}
        </div>
        <div className="flex items-center justify-center">
          <AiOutlineArrowDown className="text-blue-600" />
          {makeTempString(temp_min)}
        </div>
      </div>
    </>
  );
};

function makeTempString(temp: number) {
  return `${temp.toFixed()}℃`;
}
