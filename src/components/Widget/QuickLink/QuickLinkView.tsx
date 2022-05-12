import React from 'react';

import { useQuickLink } from '@/hooks';
import { MODAL_TYPES, useGlobalModalContext } from '@/components/Modal/GlobalModalProvider';
import QuickLinkItem from './QuickLinkItem';
import { AiOutlinePlus } from 'react-icons/ai';

const QuickLinkView = () => {
  const { showModal } = useGlobalModalContext();
  const [quickLinkList, setQuickLinkList] = useQuickLink();

  const addQuickLinkModal = () => {
    showModal(MODAL_TYPES.ADD_QUICK_LINK_MODAL, {
      title: '바로가기 만들기',
      setAction: setQuickLinkList,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 mt-4">
      <button
        className="flex flex-col justify-center items-center w-32 h-32 transition-colors duration-200 ease-in-out rounded-md cursor-pointer hover:bg-[#ffffff33]"
        type="button"
        onClick={addQuickLinkModal}
      >
        <div className="flex items-center rounded-[50%] shrink-0 h-14 w-14 justify-center bg-slate-100">
          <AiOutlinePlus size="24" fontWeight={700} />
        </div>
        <div className="text-center w-32 truncate mt-[6px] px-2 py-[2px] h-8">추가해보기</div>
      </button>

      {quickLinkList.length > 0 &&
        quickLinkList.map((item) => <QuickLinkItem key={item.id} quickLink={item} />)}
    </div>
  );
};

export default QuickLinkView;
