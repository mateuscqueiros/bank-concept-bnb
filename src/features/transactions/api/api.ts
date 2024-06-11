'use client';

import { useQuery } from '@tanstack/react-query';
import { TransactionType } from '../types';
import { getTransactions } from './handlers';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: () => getTransactions().then((res) => res.data),
    initialData: [],
  });
}

type CreateTransactionMutationType = {
  data: TransactionType;
};

export function useCreateTransaction() {}
