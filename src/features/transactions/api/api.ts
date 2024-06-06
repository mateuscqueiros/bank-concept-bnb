'use client';

import { useQuery } from '@tanstack/react-query';
import { getTransactions } from './handlers';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: () => getTransactions().then((res) => res.data),
    initialData: [],
  });
}
