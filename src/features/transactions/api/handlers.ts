import { axios } from '@/lib/api-client';
import { TransactionType } from '../types';

export async function getTransactions() {
  return axios.get<TransactionType[]>('/transactions');
}

export async function createTransaction(data: TransactionType) {
  return axios.post<TransactionType>('/transactions', data);
}

export async function updateTransaction(
  id: TransactionType['id'],
  data: Omit<TransactionType, 'id'>
) {
  return axios.put<TransactionType>(`/transactions/${id}`, data);
}

export async function deleteTransaction(id: TransactionType['id']) {
  return axios.delete(`/transactions/${id}`);
}
