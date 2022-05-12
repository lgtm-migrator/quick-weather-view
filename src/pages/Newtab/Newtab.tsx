import React from 'react';

import { Background } from '@/components';
import WidgetLayout from '@/components/WidgetLayout';
import { GlobalModal } from '@/components/Modal/GlobalModalProvider';

const Newtab = () => {
  return (
    <GlobalModal>
      <div className="min-h-screen text-100 font-roboto">
        <Background />
        <WidgetLayout />
      </div>
    </GlobalModal>
  );
};

export default Newtab;
