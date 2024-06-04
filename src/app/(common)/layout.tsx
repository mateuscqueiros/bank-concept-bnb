'use client';
import { LayoutContainer } from '@/components/layout';
import { storage } from '@/features/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CommonPagesLayout({
  children,
}: React.PropsWithChildren) {
  const router = useRouter();
  useEffect(() => {
    const token = storage.getToken();
    if (!token) {
      router.push('/login');
    }
  }, []);
  return <LayoutContainer>{children}</LayoutContainer>;
}
