import { IconMenu2 } from '@tabler/icons-react';

export type HeaderProps = {
  setOpened: (value: boolean) => void;
};

export function Header({ setOpened }: HeaderProps) {
  return (
    <div className="flex flex-row p-4 md:hidden">
      <IconMenu2 className="cursor-pointer" onClick={() => setOpened(true)} />
    </div>
  );
}
