'use client';

import Link from 'next/link';
import { useLoginUser, useUser } from '../api';
import { LoginForm } from '../components';
import { LoginFormType } from '../types';

export function LoginPage() {
  const { mutateAsync: loginUser } = useLoginUser();
  const { data: user } = useUser();

  console.log(user);

  const onSubmit = (values: LoginFormType) => {
    loginUser(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Form</h1>
      <LoginForm onSubmit={onSubmit} />
      <span className="flex justify-center text-sm mt-3">
        Não tem uma conta?&nbsp;
        <Link href="/register" className="text-primary hover:underline">
          Registre-se
        </Link>
      </span>
    </div>
  );
}
