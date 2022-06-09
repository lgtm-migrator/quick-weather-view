import React, { useState } from 'react';

import { useGlobalModalContext } from '@/components/Common/Modal/GlobalModalProvider';
import Modal from '@/components/Common/Modal/HeadlessModal';
import Button from '@/components/Common/Button/Button';
import { useInput } from '@/hooks';
import { GlobalKeypressListener } from '@/utils/globalKeypressListener';
import { Key } from '@/types/Key';
import { createQuickLinkObject } from '@/utils/quickLink';
import { QuickLinkErrorType } from '@/types/QuickLink';
import { convertDomain, IQuickLink } from '../../../utils/quickLink';
import { useHandlingQuickLinkError } from '@/hooks/useErrorHandle';

const AddQuickLinkModal = () => {
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const { title, setAction, quickLinkList } = modalProps || {};

  const [name, onChangeName] = useInput('');
  const [domain, onChangeDomain] = useInput('');

  const { checkInputs, error } = useHandlingQuickLinkError(quickLinkList);

  const createQuickLink = () => {
    if (checkInputs({ name, domain })) return;
    setAction(createQuickLinkObject(name, domain));
    hideModal();
  };

  return (
    <Modal
      isOpen={true}
      onClose={hideModal}
      title={title}
      footer={
        <Button className="float-right" theme="primary" onClick={createQuickLink}>
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
        {error.isError && <p className="text-red-500">{error.message}</p>}
      </>
    </Modal>
  );
};

export default AddQuickLinkModal;
