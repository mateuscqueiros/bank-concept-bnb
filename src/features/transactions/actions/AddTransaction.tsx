'use client';
import { useModalStore } from '@/stores/modals';
import { IconPlus } from '@tabler/icons-react';

export function AddTransaction() {
  const openModal = useModalStore.use.open();
  return (
    <div>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
          type="button"
          onClick={() => openModal('createTransaction')}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
