import React from 'react';

import { Background, Clock, Weather } from '@/components';

const Newtab = () => {
  return (
    <div className="min-h-screen text-100 font-roboto">
      <Background />
      <Clock />
      <Weather />
    </div>
  );
};

export default Newtab;
