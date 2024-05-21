'use client';

import { cn } from '@/lib/utils';
import {
  IconCoin,
  IconGraph,
  IconMessage,
  IconSettings,
  IconUserCircle,
  IconX,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { UserCard } from '.';

export type NavbarProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const navBarData = [
  {
    text: 'Dashboard',
    icon: <IconGraph />,
    link: '/',
  },
  {
    text: 'Conta',
    icon: <IconUserCircle />,
    link: '/account',
  },
  {
    text: 'Transações',
    icon: <IconCoin />,
    link: '/transactions',
  },
  {
    text: 'Chat online',
    icon: <IconMessage />,
    link: '/chat',
  },
  {
    text: 'Configurações',
    icon: <IconSettings />,
    link: '/settings',
  },
];

export function Navbar({ opened, setOpened }: NavbarProps) {
  const path = usePathname();
  return (
    <nav
      className={cn([
        'flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed h-screen text-white z-20',
        opened ? 'left-0' : 'left[-300px]',
        'md:left-0',
      ])}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 left-8"
          cursor="pointer"
          onClick={() => setOpened(false)}
        />
        <UserCard />
      </div>
    </nav>
  );
}
