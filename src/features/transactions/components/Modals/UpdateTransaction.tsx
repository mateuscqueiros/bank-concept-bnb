import { Modal } from '@/components/elements';
import { useUser } from '@/features/auth';
import { catchErrors } from '@/lib/api-client';
import { useModalStore } from '@/stores/modals';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { DeleteTransaction } from '../../actions';
import { useTransactions, useUpdateTransaction } from '../../api';
import { TransactionFormType } from '../../types';
import { DefaultTransactionForm } from '../Form';

export function UpdateTransactionModal() {
  const thisModalName = 'updateTransaction';
  const updateTransaction = useUpdateTransaction();
  const close = useModalStore.use.close();
  const { data: user } = useUser();
  const router = useRouter();

  const { data: transactions } = useTransactions();
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName)!;

  const transactionData =
    transactions && transactions.find((t) => t.id === thisModalState.dataId);

  const onSubmit = (values: TransactionFormType) => {
    if (user && transactionData) {
      const data = {
        ...values,
        userId: user.id,
      };
      updateTransaction
        .mutateAsync({ data, id: transactionData?.id })
        .then(() => {
          close(thisModalName);
          toast.success('Transação atualizada');
        })
        .catch((err) => {
          catchErrors({
            err,
            fallbackMessage: 'Não foi possível atualizar a transação',
            router,
          });
        });
    }
  };

  if (!transactionData && thisModalState.open) {
    return toast.error('Transação não existe');
  }

  return (
    <Modal
      actions={
        thisModalState?.dataId ? (
          <DeleteTransaction itemId={thisModalState?.dataId} />
        ) : undefined
      }
      title="Transação"
      name={thisModalName}
    >
      <DefaultTransactionForm
        defaultValues={transactionData}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}
