import React, { useState } from 'react';

import { useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import Modal from '@/components/Common/Modal/HeadlessModal';
import Button from '@/components/Common/Button/Button';
import { useInput } from '@/hooks';
import { GlobalKeypressListener } from '@/utils/globalKeypressListener';
import { Key } from '@/types/Key';

const EditQuickLinkModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, quickLink, editQuickLinkList, removeQuickLinkList } = modalProps || {};

  const [name, onChangeName] = useInput(quickLink.name);
  const [domain, onChangeDomain] = useInput(quickLink.domain);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onEditQuickLink = () => {
    if (!name || !domain) {
      setShowErrorMessage(true);
      return;
    }
    quickLink.name = name;
    quickLink.domain = domain;
    editQuickLinkList(quickLink);
    hideModal();
  };

  const onRemoveQuickLink = () => {
    removeQuickLinkList(quickLink);
    hideModal();
  };

  return (
    <Modal
      isOpen={true}
      onClose={hideModal}
      title={title}
      footer={
        <div className="flex justify-end gap-1">
          <Button size="small" theme="basic" onClick={onEditQuickLink}>
            수정하기
          </Button>
          <Button size="small" theme="destructive" onClick={onRemoveQuickLink}>
            삭제하기
          </Button>
        </div>
      }
    >
      <GlobalKeypressListener keyCode={Key.Enter} handler={onEditQuickLink} />
      <div>
        <label>이름</label>
        <input type="text" placeholder="youtube" value={name} onChange={onChangeName} />
      </div>
      <div>
        <label>주소</label>
        <input type="text" placeholder="youtube.com" value={domain} onChange={onChangeDomain} />
      </div>
      {showErrorMessage && <p className="text-red-500">값을 입력해주세요</p>}
    </Modal>
  );
};

export default EditQuickLinkModal;
