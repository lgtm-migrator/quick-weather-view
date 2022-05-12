import React from 'react';

import { IQuickLink } from '@/hooks/useQuickLink';
import { UnstyledLink } from '@/components/UnstyledLink/UnstyledLink';

interface IQuickLinkItem {
  quickLink: IQuickLink;
}

// @TODO 디자인하기
const QuickLinkItem = ({ quickLink }: IQuickLinkItem) => {
  const { domain, name, thumbnail } = quickLink;

  return (
    <UnstyledLink
      className="flex flex-col justify-center items-center w-32 h-32 transition-colors duration-200 ease-in-out rounded-md cursor-pointer hover:bg-[#ffffff33]"
      url={domain}
      external
      aria-label={name}
      title={name}
    >
      <div className="flex items-center rounded-[50%] shrink-0 h-14 w-14 justify-center bg-slate-100">
        <img alt={name.slice(0, 2)} src={thumbnail} />
      </div>
      <div className="text-center w-32 truncate mt-[6px] px-2 py-[2px] h-8">{name}</div>
    </UnstyledLink>
  );
};

export default QuickLinkItem;
