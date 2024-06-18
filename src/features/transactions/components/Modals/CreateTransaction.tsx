import { Modal } from '@/components/elements';
import { useUser } from '@/features/auth';
import { uuid } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCreateTransaction } from '../../api';
import { TransactionFormType } from '../../types';
import { DefaultTransactionForm } from '../Form';

// Salvar na API (mutação do Tanstack Query)
// Verificar se usuário está autenticado
// Fechar modal

export function CreateTransactionModal() {
  const thisModalName = 'createTransaction';

  const createTransaction = useCreateTransaction();
  const close = useModalStore.use.close();
  const { data: user } = useUser();
  const router = useRouter();

  const onSubmit = (values: TransactionFormType) => {
    if (user) {
      const data = {
        id: uuid(),
        ...values,
        userId: user.id,
      };
      createTransaction
        .mutateAsync({ data })
        .then(() => {
          close(thisModalName);
          toast.success('Transação criada');
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast('Você não está logado', {
              action: {
                label: 'Ir para login',
                onClick: () => router.push('/login'),
              },
            });
          }
        });
    }
  };
  return (
    <Modal name={thisModalName} title="Transação">
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
