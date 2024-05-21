'use client';

import { useState } from 'react';
import { Header, Navbar } from '.';

export function Navigation() {
  const [opened, setOpened] = useState(true);
  return (
    <>
      <Header setOpened={setOpened} />
      <Navbar opened={opened} setOpened={setOpened} />
    </>
  );
}
