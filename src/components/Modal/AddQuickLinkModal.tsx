import React from 'react';

import { useGlobalModalContext } from '@/components/Modal/GlobalModalProvider';
import Modal from '@/components/Modal/HeadlessModal';
import { useInput } from '@/hooks';
import { GlobalKeypressListener } from '@/utils/globalKeypressListener';
import { Key } from '@/types/Key';

const AddQuickLinkModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, setAction } = modalProps || {};

  const [name, onChangeName] = useInput('');
  const [domain, onChangeDomain] = useInput('');

  const createQuickLink = () => {
    setAction(name, domain);
    hideModal();
  };

  return (
    <Modal
      isOpen={true}
      onClose={hideModal}
      title={title}
      footer={
        <button type="button" onClick={createQuickLink}>
          추가하기
        </button>
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
      </>
    </Modal>
  );
};

export default AddQuickLinkModal;
