'use client';

import { FormItem, inputStyles } from '@/components/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterFormType, registerFormSchema } from '../types';
import { DEFAULT_REGISTER_FORM_VALUES } from '../values';

export type RegisterFormProps = {
  initialValues?: RegisterFormType;
  onSubmit?: (values: RegisterFormType, reset?: () => void) => void;
};

export function RegisterForm({ initialValues, onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: initialValues || DEFAULT_REGISTER_FORM_VALUES,
  });
  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values, reset))}
      className="pt-5 flex flex-col justify-between"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register('name')} />
      </FormItem>
      <FormItem label="Email" error={errors.email}>
        <input type="email" className={inputStyles} {...register('email')} />
      </FormItem>
      <FormItem label="Senha" error={errors.password}>
        <input
          type="password"
          className={inputStyles}
          {...register('password')}
        />
      </FormItem>
    </form>
  );
}
