import React from 'react';

import Weather from '@/components/Weather';
import Clock from '@/components/Clock';
import QuickLinkView from '@/components/Widget/QuickLink/QuickLinkView';

const WidgetLayout = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="relative">
        <Weather />
        <Clock />
        <QuickLinkView />
      </div>
    </div>
  );
};

export default WidgetLayout;
