import { PropsWithChildren, useCallback, useState } from 'react';

import { MODAL_TYPES, useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import { isEmptyArray, isEmptyObjectValue, isEmptyString } from '@/utils/assertions';
import React from 'react';

interface IExceptionWrapper<T> {
  data: T;
  emptyMessage?: string;
  duplicateDomainMessage?: string;
  cb?: () => void;
}

enum ErrorType {
  emptyInput = 'EMPTY_INPUT',
  invalidDomain = 'INVALID_DOMAIN',
  duplicateDomain = 'DUPLICATE_DOMAIN',
}

const ERROR_MESSAGE: { [key in keyof typeof ErrorType]: string } = {
  emptyInput: '값을 입력해주세요',
  invalidDomain: '유효하지 않은 형식의 도메인이예요',
  duplicateDomain: '이미 등록된 도메인이예요',
};

/**
 * data를 받아와 특정 조건에 따른 에러 핸들링을 합니다.
 */
function ExceptionWrapper<T>({
  data,
  emptyMessage,
  duplicateDomainMessage,
  cb,
}: IExceptionWrapper<T>) {
  const { showModal } = useGlobalModalContext();

  const [error, setError] = useState<{ message: string[]; isError: boolean }>({
    message: [],
    isError: false,
  });

  const EMPTY_MESSAGE = emptyMessage ?? ERROR_MESSAGE['emptyInput'];
  const DUPLICATE_DOMAIN_MESSAGE = duplicateDomainMessage ?? ERROR_MESSAGE['duplicateDomain'];

  const checkIsEmpty = useCallback(
    (data: T) => {
      if (isEmptyArray(data) || isEmptyString(data) || isEmptyObjectValue(data)) {
        console.log('empty: ', data);
        setError((prev) => ({ message: [...prev.message, EMPTY_MESSAGE], isError: true }));
      }
    },
    [EMPTY_MESSAGE]
  );

  const checkIsDuplicateDomain = useCallback((data: T) => {}, []);

  const showUserErrorModal = useCallback(() => {
    showModal(MODAL_TYPES.ADD_QUICK_LINK_MODAL, {
      title: '다시 시도해주세요',
      errorMessage: error.message.join('').replaceAll(',', '\n'),
    });
  }, [error.message, showModal]);

  checkIsEmpty(data);
  checkIsDuplicateDomain(data);

  // const El = error.isError ? showUserErrorModal : null;

  return <>{error.isError ? error.message : null}</>;
}

export default ExceptionWrapper;
