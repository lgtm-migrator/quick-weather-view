import React, { useState, createContext, useContext } from 'react';

import AddQuickLinkModal from '@/components/Modal/AddQuickLinkModal';
import { GlobalModalContextType, IModalComponents, IModalTypes, IStore } from '@/types/Modal';

export const MODAL_TYPES: IModalTypes = {
  ADD_QUICK_LINK_MODAL: 'ADD_QUICK_LINK_MODAL',
};

const MODAL_COMPONENTS: IModalComponents = {
  [MODAL_TYPES.ADD_QUICK_LINK_MODAL]: AddQuickLinkModal,
};

const initialState: GlobalModalContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initialState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<{}> = ({ children }) => {
  const [store, setStore] = useState<IStore>({});
  const { modalType, modalProps } = store;

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];

    if (!modalType || !ModalComponent) {
      return null;
    }

    return <ModalComponent id="quick-weather-global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
