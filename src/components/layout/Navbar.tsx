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
import Image from 'next/image';
import Link from 'next/link';
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

type NavItemProps = {
  text: string;
  icon: JSX.Element;
  link: string;
  active: string;
};

function NavItem({ text, icon, link, active }: NavItemProps) {
  const isActive = link === active;
  return (
    <li>
      <Link href={link}>
        <div
          className={cn([
            'flex flex-row items-center h-10 px-8 py-6 hover:bg-secondary',
            isActive ? 'bg-secondary' : null,
          ])}
        >
          <span className="mr-10">{icon}</span>
          <span>{text}</span>
        </div>
      </Link>
    </li>
  );
}

export function Navbar({ opened, setOpened }: NavbarProps) {
  const path = usePathname();

  return (
    <nav
      className={cn([
        'flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed h-screen text-white z-20',
        opened ? 'left-0' : 'left-[-300px]',
        'md:left-0',
      ])}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 right-8"
          cursor="pointer"
          onClick={() => setOpened(!opened)}
        />
        <div className="mb-28">
          <UserCard />
        </div>
        <ul>
          {navBarData.map((navItem) => (
            <NavItem
              icon={navItem.icon}
              link={navItem.link}
              text={navItem.text}
              key={navItem.link}
              active={path}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center p-4 text-sm">
        <Image
          width={70}
          height={70}
          src="/icons/logo-bnb.svg"
          alt="Logo BNB"
          priority
        />
        <div className="flex flex-col items-center mt-4">
          <span>&#169; 2024 Banco do Nordeste do Brasil</span>
          <span className="text-center">
            (Este é um app conceito, não afiliado a organização que representa)
          </span>
        </div>
      </div>
    </nav>
  );
}
