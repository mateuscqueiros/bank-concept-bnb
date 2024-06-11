import { AddCategory } from '@/features/categories';
import { AddTransaction } from '../actions';

export function TransactionsPage() {
  return (
    <div className="flex flex-col p-6 pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl mb-5">Transações</h1>
        <div className="flex flex-row gap-5">
          <AddCategory />
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}
