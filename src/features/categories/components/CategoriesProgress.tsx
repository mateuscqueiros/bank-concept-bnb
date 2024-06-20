import { Button, Progress } from '@/components/elements';
import { useTransactions } from '@/features/transactions';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { useCategories } from '../api';
import { getCategoryIcon, getCategoryItems } from '../lib';
import { CategoryType } from '../types';

type CategoryProps = {
  totalExpenses: number;
  data: CategoryType;
};

function Category({ data, totalExpenses }: CategoryProps) {
  const { data: transactions } = useTransactions();
  const openUpdate = useModalStore.use.openUpdate();

  const icon = getCategoryIcon(data.icon);

  const categoryTransactions = getCategoryItems(data.id, transactions);
  const totalCategoryExpenses = categoryTransactions.reduce(
    (acc: any, transaction: any) => transaction.value + acc,
    0
  );
  const color = `text-${data.color}-500`;

  return (
    <div
      className={cn([`flex flex-row mb-3 cursor-pointer`, color])}
      onClick={() => openUpdate('updateCategory', data.id)}
    >
      {icon}
      <span className="ml-4 font-medium w-24 text-text">{data.name}</span>
      <span className="font-medium">
        {Math.round((totalCategoryExpenses / totalExpenses) * 100)} %
      </span>
    </div>
  );
}

export function CategoriesProgress({ className }: { className?: string }) {
  const { data: categories } = useCategories();
  const { data: transactions } = useTransactions();

  let totalExpenses = transactions
    ? transactions.reduce((acc, transaction) => transaction.value + acc, 0)
    : 0;
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  const expensesCategories = categories.map(
    (category) =>
      totalExpenses && (
        <Category
          key={`category-item-${category.id}`}
          totalExpenses={totalExpenses}
          data={category}
        />
      )
  );

  return (
    <div
      className={cn([
        'flex flex-col md:flex-row gap-y-4 items-center w-full justify-between',
        className,
      ])}
    >
      {transactions?.length > 0 && (
        <>
          <div className="flex flex-row relative">
            <div className="flex flex-col justify-between text-sm h-full mr-10">
              {infoIteration && (
                <>
                  {Array(4)
                    .fill(0)
                    .map((_) => {
                      const displayInfo = accInfo + infoIteration;
                      accInfo -= infoIteration;
                      return (
                        <span key={`info-item-${displayInfo}`}>
                          R$ {Math.ceil(displayInfo / 10) * 10}
                        </span>
                      );
                    })}
                  <span>R$ {Math.ceil(infoIteration / 10) * 10}</span>
                  <span>R$ 0</span>
                </>
              )}
            </div>
            <Progress categories={categories} />
          </div>
          <div className="flex flex-col items-center justify-between h-fit">
            {expensesCategories}
            <Button className="mt-5">Imprimir</Button>
          </div>
        </>
      )}
      {transactions?.length === 0 && (
        <div className="flex flex-col w-full items-center">Sem transações</div>
      )}
    </div>
  );
}
