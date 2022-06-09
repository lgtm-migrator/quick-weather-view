export interface IModalTypes {
  ADD_QUICK_LINK_MODAL: string;
  EDIT_QUICK_LINK_MODAL: string;
}

export interface IModalComponents {
  [x: string]: () => JSX.Element;
}

export type GlobalModalContextType = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: any;
};

export interface IStore {
  modalType?: any;
  modalProps?: any;
}
