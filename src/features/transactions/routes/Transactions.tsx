'use client';
import { AddCategory, CategoriesProgress } from '@/features/categories';
import { AddTransaction } from '../actions';
import { useTransactions } from '../api';
import { TransactionList } from '../components';

export function TransactionsPage() {
  const { data: transactions } = useTransactions();

  const totalExpenses = transactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0
  );

  return (
    <div className="flex flex-col p-6 pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl mb-5">Transações</h1>
        <div className="flex flex-row gap-5">
          <AddCategory />
          <AddTransaction />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-[300px] gap-y-10 justify-center w-full p-12 bg-contrast rounded-xl mb-10">
        <div className="flex flex-col justify-center text-primary">
          <span className="font-medium">
            Total de gastos:{' '}
            <b>
              {totalExpenses.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </b>
          </span>
        </div>
        <CategoriesProgress className="flex flex-col max-w-[600px] w-full mx-auto gap-10" />
      </div>
      <div className="flex flex-col max-w-[600px] w-full mx-auto gap-10">
        {transactions.length > 0 && <TransactionList title="Todas" />}
      </div>
    </div>
  );
}
