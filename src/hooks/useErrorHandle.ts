import { useState } from 'react';
import { IQuickLink, convertDomain } from '../utils/quickLink';
import { QuickLinkErrorType } from '../types/QuickLink';

export function useHandlingQuickLinkError(orignQuickList: IQuickLink[]) {
  const [error, setError] = useState({
    message: '',
    isError: false,
  });

  const ERROR_MESSAGE: { [key in keyof typeof QuickLinkErrorType]: string } = {
    emptyInput: '값을 입력해주세요',
    invalidDomain: '유효하지 않은 형식의 도메인이예요',
    duplicateDomain: '이미 등록된 도메인이에요',
  };

  function checkInputs(quickLink: { name: string; domain: string }): boolean {
    const { name, domain } = quickLink;
    if (!name || !domain) {
      setError({ message: ERROR_MESSAGE['emptyInput'], isError: true });
      return true;
    }

    if (checkDuplicateDomain(orignQuickList, domain)) {
      setError({ message: ERROR_MESSAGE['duplicateDomain'], isError: true });
      return true;
    }

    return false;
  }

  return { error, checkInputs };
}

const checkDuplicateDomain = (orignQuickList: IQuickLink[], domain: string) => {
  const duplicateDomain = orignQuickList.filter(
    (item: IQuickLink) => item.domain === convertDomain(domain)
  )[0];
  return typeof duplicateDomain === 'object';
};
