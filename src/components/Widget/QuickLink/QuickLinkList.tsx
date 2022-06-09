import React from 'react';

import { MODAL_TYPES, useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import QuickLinkItem from './QuickLinkItem';
import { AiOutlinePlus } from 'react-icons/ai';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { convertDomain } from '@/utils/quickLink';

interface IQuickLink {
  id: string;
  name: string;
  domain: string;
  thumbnail: string;
}

const QuickLinkList = () => {
  const { showModal } = useGlobalModalContext();
  const [quickLinkList, setQuickLinkList] = useLocalStorage<IQuickLink[]>('quick-link', []);

  function setQuickLinkListData(quickLink: IQuickLink) {
    setQuickLinkList([...quickLinkList, quickLink]);
  }

  function editQuickLinkListData(quickLink: IQuickLink) {
    const copyQuickLinkList = quickLinkList.map((item) => {
      if (item.id === quickLink.id) {
        return Object.assign(item, {
          name: quickLink.name,
          domain: convertDomain(quickLink.domain),
          thumbnail: `https://www.google.com/s2/favicons?domain=${quickLink.domain}&sz=24`,
        });
      }
      return item;
    });

    setQuickLinkList([...copyQuickLinkList]);
  }

  function removeQuickLinkListData(quickLink: IQuickLink) {
    const copyQuickLinkList = [...quickLinkList];
    const target = copyQuickLinkList.filter((item) => item.id === quickLink.id)[0];
    copyQuickLinkList.splice(copyQuickLinkList.indexOf(target), 1);
    setQuickLinkList([...copyQuickLinkList]);
  }

  const addQuickLinkModal = () => {
    showModal(MODAL_TYPES.ADD_QUICK_LINK_MODAL, {
      title: '바로가기 만들기',
      quickLinkList,
      setAction: setQuickLinkListData,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 mt-4 text-stone-800">
      {quickLinkList.length > 0 &&
        quickLinkList.map((item) => (
          <QuickLinkItem
            key={item.id}
            quickLink={item}
            editQuickLinkList={editQuickLinkListData}
            removeQuickLinkList={removeQuickLinkListData}
          />
        ))}
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
    </div>
  );
};

export default QuickLinkList;
