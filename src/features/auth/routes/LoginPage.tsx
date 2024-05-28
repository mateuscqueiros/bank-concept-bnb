'use client';

import { LoginForm } from '../components';
import { LoginFormType } from '../types';

export function LoginPage() {
  const onSubmit = (values: LoginFormType) => console.log(values);
  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Form</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
