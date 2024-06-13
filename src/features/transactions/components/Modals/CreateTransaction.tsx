import { Modal } from '@/components/elements';
import { TransactionFormType } from '../../types';
import { DefaultTransactionForm } from '../Form';

export function CreateTransactionModal() {
  const thisModalName = 'createTransaction';
  const onSubmit = (values: TransactionFormType) => {
    console.log(values);
  };
  return (
    <Modal name={thisModalName} title="Transação">
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
