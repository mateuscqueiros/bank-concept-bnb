'use client';
import { useModalStore } from '@/stores/modals';
import { useTransactions } from '../api';
import { TransactionItem } from './Item';

export type TransactionListProps = {
  title: string;
};

export function TransactionList({ title }: TransactionListProps) {
  const openUpdateModal = useModalStore.use.openUpdate();
  const { data: transactions } = useTransactions();

  return (
    <div>
      <h3 className="font-bold text-xl mb-5">{title}</h3>
      <ul className="relative flex flex-col gap-5 w-full before:absolute before:content-[''] before:left-[19px] before:my-[16px] before:h-[calc(100%-32px)] before:max-h-full before:w-[2px] before:bg-gray-200">
        {transactions.map((transaction) => (
          <li
            className="cursor-pointer"
            key={`transaction-item-${transaction.id}`}
            onClick={() => openUpdateModal('updateTransaction', transaction.id)}
          >
            <TransactionItem data={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
}
