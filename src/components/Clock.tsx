import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useInterval } from '@/hooks';

const Clock = () => {
  const MILLISECONDS_PER_SECOND = 1000;
  const [currentTime, setCurrentTime] = useState(dayjs());
  const hours = useMemo(() => currentTime.format('HH'), [currentTime]);
  const minutes = useMemo(() => currentTime.format('mm'), [currentTime]);
  const seconds = useMemo(() => currentTime.format('ss'), [currentTime]);
  const formattedDate = useMemo(() => {
    return currentTime.format('YY/MM/DD');
  }, [currentTime]);

  function updateTime() {
    setCurrentTime(dayjs());
  }

  useInterval(() => {
    updateTime();
  }, MILLISECONDS_PER_SECOND);

  return (
    <div className="flex flex-col items-center justify-center mt-12 font-medium text-white">
      <div className="tracking-tight text-clock">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-right text-date">{formattedDate}</div>
    </div>
  );
};

export default Clock;
