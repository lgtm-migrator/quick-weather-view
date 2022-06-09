import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { UnstyledLink } from '@/components/Common/UnstyledLink/UnstyledLink';
import { MODAL_TYPES, useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import { IQuickLink } from '@/utils/quickLink';

interface IQuickLinkItem {
  quickLink: IQuickLink;
  editQuickLinkList: (quickLink: IQuickLink) => void;
  removeQuickLinkList: (quickLink: IQuickLink) => void;
}

const QuickLinkItem = ({ quickLink, editQuickLinkList, removeQuickLinkList }: IQuickLinkItem) => {
  const { domain, name, thumbnail } = quickLink;

  const { showModal } = useGlobalModalContext();

  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault();
    showHandlingQuickLinkModal();
  };

  const showHandlingQuickLinkModal = () => {
    showModal(MODAL_TYPES.EDIT_QUICK_LINK_MODAL, {
      title: '바로가기 수정하기',
      quickLink,
      editQuickLinkList,
      removeQuickLinkList,
    });
  };

  return (
    <UnstyledLink
      className="relative group flex flex-col justify-center items-center w-32 h-32 transition-colors rounded-md cursor-pointer hover:bg-[#ffffff33]"
      url={domain}
      aria-label={name}
      title={name}
    >
      <button
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          onClickButton(event, name)
        }
        className="absolute top-0 right-0 py-1 mt-2 mr-2 transition-opacity rounded-md opacity-0 text-slate-100 group-hover:opacity-100"
      >
        <BsThreeDotsVertical size={20} />
      </button>
      <div className="flex items-center rounded-[50%] shrink-0 h-14 w-14 justify-center bg-slate-100">
        <img alt={name.slice(0, 2)} src={thumbnail} />
      </div>
      <div className="text-center w-32 truncate mt-[6px] px-2 py-[2px] h-8">{name}</div>
    </UnstyledLink>
  );
};

export default QuickLinkItem;
