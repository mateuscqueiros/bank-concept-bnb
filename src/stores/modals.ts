'use client';

import { create } from 'zustand';
import { createSelectors } from './utils';

type ModalProps = {
  name: string;
  open: boolean;
  dataId?: string | null;
};

type ModalStoreType = {
  modals: ModalProps[];
  open: (modalName: string) => void;
  close: (modalName: string) => void;
  openUpdate: (modalName: string, id: ModalProps['dataId']) => void;
};

const DEFAULT_PROPS: ModalProps[] = [
  {
    name: 'createTransaction',
    open: false,
  },
  {
    name: 'updateTransaction',
    open: false,
    dataId: null,
  },
  {
    name: 'createCategory',
    open: false,
  },
  {
    name: 'updateCategory',
    open: false,
    dataId: null,
  },
];

export const modalStoreBase = create<ModalStoreType>()((set) => ({
  modals: DEFAULT_PROPS,
  open: (name) =>
    set((state) => {
      const other = state.modals.filter((m) => m.name !== name);
      return {
        ...state,
        modals: [...other, { name, open: true }],
      };
    }),
  close: (name) =>
    set((state) => {
      const other = state.modals.filter((m) => m.name !== name);
      return {
        ...state,
        modals: [...other, { name, open: false }],
      };
    }),
  openUpdate: (name, id) =>
    set((state) => {
      const other = state.modals.filter((m) => m.name !== name);
      return {
        ...state,
        modals: [...other, { name, open: true, dataId: id }],
      };
    }),
}));

export const useModalStore = createSelectors(modalStoreBase);
