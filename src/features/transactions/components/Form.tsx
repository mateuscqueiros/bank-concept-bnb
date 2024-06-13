'use client';
import { Button } from '@/components/elements';
import { FormItem, inputStyles, selectStyles } from '@/components/forms';
import { useCategories } from '@/features/categories';
import { PAYMENT_METHODS } from '@/values/data';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { TransactionFormType, transactionSchema } from '../types';
import { DEFAULT_TRANSACTION_FORM_VALUES } from '../values';

export type DefaultTransactionFormProps = {
  defaultValues?: TransactionFormType;
  onSubmit?: (values: TransactionFormType) => void;
};

export function DefaultTransactionForm({
  defaultValues,
  onSubmit,
}: DefaultTransactionFormProps) {
  const { data: categories } = useCategories();
  const initialValues = defaultValues && {
    ...defaultValues,
    date: new Date(defaultValues.date),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TransactionFormType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: initialValues || DEFAULT_TRANSACTION_FORM_VALUES,
  });
  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values))}
      className="pt-5 flex flex-col justify-between h-full"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register('name')} />
      </FormItem>
      <FormItem label="Valor" error={errors.value}>
        <Controller
          control={control}
          name="value"
          render={({ field: { onChange, value } }) => (
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              className={inputStyles}
              value={value}
              onValueChange={(v) => onChange(Number(v.value))}
            />
          )}
        />
      </FormItem>
      <div className="flex gap-5">
        <FormItem label="Categoria" error={errors.categoryId}>
          <select className={selectStyles} {...register('categoryId')}>
            {categories.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </FormItem>
        <FormItem label="Tipo" error={errors.paymentType}>
          <select className={selectStyles} {...register('paymentType')}>
            {PAYMENT_METHODS.map((p) => (
              <option value={p.value} key={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </FormItem>
      </div>
      <FormItem label="Data" error={errors.date}>
        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <ReactDatePicker
              className={selectStyles}
              dateFormat="dd/MM/yyyy"
              placeholderText="Data"
              selected={new Date(value)}
              onChange={(date: any) => onChange(new Date(date))}
            />
          )}
        />
      </FormItem>
      <Button className="btn-primary w-full" type="submit">
        Salvar
      </Button>
    </form>
  );
}
