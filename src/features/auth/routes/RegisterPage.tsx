'use client';

import Link from 'next/link';
import { useCreateUser } from '../api';
import { RegisterForm } from '../components';
import { RegisterFormType } from '../types';

export function RegisterPage() {
  const { mutateAsync: createUser } = useCreateUser();
  const onSubmit = (values: RegisterFormType) => {
    createUser(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Register</h1>
      <RegisterForm onSubmit={onSubmit} />{' '}
      <span className="flex justify-center text-sm mt-3">
        Já tem uma conta?&nbsp;
        <Link href="/login" className="text-primary hover:underline">
          Faça login
        </Link>
      </span>
    </div>
  );
}
