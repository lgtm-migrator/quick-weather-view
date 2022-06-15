/* eslint-disable no-restricted-globals */
import React from 'react';

import Button from './Common/Button/Button';

interface IReloadButtonProps {
  message?: string;
  handler?(): void;
}

const ReloadButton = ({
  message = '아래 버튼을 눌러 다시 시도해주세요',
  handler = () => location.reload(),
}: IReloadButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-1 text-sm">{message}</p>
      <Button size="small" onClick={handler}>
        다시 시도하기
      </Button>
    </div>
  );
};

export default ReloadButton;
