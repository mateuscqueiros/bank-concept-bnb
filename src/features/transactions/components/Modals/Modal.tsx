import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { IconX } from '@tabler/icons-react';
import { ReactElement } from 'react';

export type ModalProps = {
  name: string;
  title: string;
  actions?: ReactElement;
} & React.PropsWithChildren;

export function Modal({ name, title, actions, children }: ModalProps) {
  const modals = useModalStore.use.modals();
  const thisModal = modals.find((modal) => modal.name === name);
  const closeModal = useModalStore.use.close();

  return (
    <div
      data-modal={name}
      className={cn([
        'flex flex-col w-[400px] bg-bg max-w-[80%] max-h-screen rounded-xl px-6 py-8 z-50',
        thisModal?.open ? 'flex' : 'hidden',
      ])}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-3">
          {actions}
          <IconX className="cursor-pointer" onClick={() => closeModal(name)} />
        </div>
      </div>
      {thisModal?.open && <div className="h-full">{children}</div>}
    </div>
  );
}
