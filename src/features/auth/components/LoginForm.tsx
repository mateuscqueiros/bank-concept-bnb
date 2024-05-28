'use client';

import { Button } from '@/components/elements';
import { FormItem, inputStyles } from '@/components/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormType, loginFormSchema } from '../types';
import { DEFAULT_LOGIN_FORM_VALUES } from '../values';

export type LoginFormProps = {
  initialValues?: LoginFormType;
  onSubmit?: (values: LoginFormType, reset?: () => void) => void;
};

export function LoginForm({ initialValues, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: initialValues || DEFAULT_LOGIN_FORM_VALUES,
  });
  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values, reset))}
      className="pt-5 flex flex-col justify-between"
    >
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
      <Button className="btn-primary w-full" type="submit">
        Salvar
      </Button>
    </form>
  );
}
