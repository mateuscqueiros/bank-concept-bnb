import { TransactionFormType } from '../types';

export const DEFAULT_TRANSACTION_FORM_VALUES: TransactionFormType = {
  name: '',
  date: new Date(),
  value: 0,
  paymentType: 'pix',
  categoryId: '0',
};
