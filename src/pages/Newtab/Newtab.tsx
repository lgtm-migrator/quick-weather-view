import React from 'react';

import { Background } from '@/components';
import { GlobalModal } from '@/components/Common/Modal/GlobalModalProvider';
import Weather from '@/components/Widget/Weather/Weather';
import Clock from '@/components/Widget/Clock';
import QuickLinkView from '@/components/Widget/QuickLink/QuickLinkList';

const Newtab = () => {
  return (
    <GlobalModal>
      <div className="min-h-screen text-100 font-roboto">
        <Background />
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
