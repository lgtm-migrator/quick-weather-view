import React from 'react';

import { useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import Modal from '@/components/Common/Modal/HeadlessModal';
import Button from '@/components/Common/Button/Button';

const UserErrorModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, errorMessage } = modalProps || {};

  return (
    <Modal
      isOpen={true}
      onClose={hideModal}
      title={title ?? '오류가 발생했어요'}
      footer={
        <Button className="float-right" theme="primary" onClick={hideModal}>
          확인
        </Button>
      }
    >
      <pre className="text-red-500">{errorMessage}</pre>
    </Modal>
  );
};

export default UserErrorModal;
