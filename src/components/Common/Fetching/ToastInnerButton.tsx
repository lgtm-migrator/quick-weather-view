/* eslint-disable no-restricted-globals */
import React from 'react';

import Button from '../Button/Button';

interface IToastInnerButtonProps {
  message?: string;
  handler?(): void;
  isHideHandler?: boolean;
}

const ToastInnerButton = ({
  message = '아래 버튼을 눌러 다시 시도해주세요',
  handler = () => location.reload(),
  isHideHandler = false,
}: IToastInnerButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-1 text-sm">{message}</p>
      {!isHideHandler && (
        <Button size="small" onClick={handler}>
          다시 시도하기
        </Button>
      )}
    </div>
  );
};

export default ToastInnerButton;
