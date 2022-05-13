import React, { useState } from 'react';

import { useGlobalModalContext } from '@/components/Modal/GlobalModalProvider';
import Modal from '@/components/Modal/HeadlessModal';
import Button from '@/components/Button/Button';
import { useInput } from '@/hooks';
import { GlobalKeypressListener } from '@/utils/globalKeypressListener';
import { Key } from '@/types/Key';

const AddQuickLinkModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, setAction } = modalProps || {};

  const [name, onChangeName] = useInput('');
  const [domain, onChangeDomain] = useInput('');

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const createQuickLink = () => {
    if (!name || !domain) {
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);
    setAction(name, domain);
    hideModal();
  };

  return (
    <Modal
      isOpen={true}
      onClose={hideModal}
      title={title}
      footer={
        <Button theme="primary" onClick={createQuickLink}>
          추가하기
        </Button>
      }
    >
      <>
        <GlobalKeypressListener keyCode={Key.Enter} handler={createQuickLink} />
        <div>
          <label>이름</label>
          <input type="text" placeholder="youtube" value={name} onChange={onChangeName} />
        </div>
        <div>
          <label>주소</label>
          <input type="text" placeholder="youtube.com" value={domain} onChange={onChangeDomain} />
        </div>
        {showErrorMessage && <p className="text-red-500">값을 입력해주세요</p>}
      </>
    </Modal>
  );
};

export default AddQuickLinkModal;
