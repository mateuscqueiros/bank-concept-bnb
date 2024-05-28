'use client';

import { RegisterForm } from '../components';
import { RegisterFormType } from '../types';

export function RegisterPage() {
  const onSubmit = (values: RegisterFormType) => console.log(values);
  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}
