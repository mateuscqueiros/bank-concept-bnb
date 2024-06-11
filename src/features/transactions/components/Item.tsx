import { getCategoryIcon, useCategories } from '@/features/categories';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { format } from 'date-fns';
import { TransactionType } from '../types';

type TransactionItemProps = {
  data: TransactionType;
};

export function TransactionItem({ data }: TransactionItemProps) {
  const { data: categories } = useCategories();
  const category = categories.find((c) => c.id === data.categoryId);

  const openUpdate = useModalStore.use.openUpdate();
  const categoryBadgeColor = `bg-${category?.color}-500`;

  return (
    <div
      className="relative flex flex-row flex-wrap w-full items-center justify-between"
      onClick={() => openUpdate('updateTransaction', data.id)}
    >
      <div className="absolute left-0 w-[50px] h-full flex items-center">
        <div
          className={cn([
            'flex flex-row items-center justify-center w-[40px] h-[40px] rounded-full',
            categoryBadgeColor,
          ])}
        >
          <div className="w-[24px] h-[24px] text-white">
            {getCategoryIcon(category?.icon || '')}
          </div>
        </div>
      </div>
      <div className="pl-[60px]">
        <span className="font-medium text-sm">{category?.name}</span>
        <h3 className="font-medium my-0">{data?.name || <i>Sem nome</i>}</h3>
        <span className="text-xs">{format(data.date, 'dd/MM/yyyy')}</span>
      </div>
      <span className="font-medium">R$ {data.value}</span>
    </div>
  );
}
