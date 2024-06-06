'use client';
import { LayoutContainer } from '@/components/layout';
import { getUser } from '@/features/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CommonPagesLayout({
  children,
}: React.PropsWithChildren) {
  const router = useRouter();

  async function checkLogin() {
    const user = await getUser()
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (!user) {
      router.push('/login');
    }
  }

  useEffect(() => {
    checkLogin();
  });
  return <LayoutContainer>{children}</LayoutContainer>;
}
