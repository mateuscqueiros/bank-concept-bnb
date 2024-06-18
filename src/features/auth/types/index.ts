import { z } from 'zod';

export const loginFormSchema = z
  .object({
    email: z.string().email('Este email não é válido'),
    password: z
      .string()
      .min(5, { message: 'A senha deve ter mais de 5 caracteres' }),
  })
  .required();

export type LoginFormType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    name: z.string().min(1, { message: 'O nome é obrigatório' }),
    email: z.string().email('Este email não é válido'),
    password: z
      .string()
      .min(5, { message: 'A senha deve ter mais de 5 caracteres' }),
  })
  .required();

export type RegisterFormType = z.infer<typeof registerFormSchema>;
export type UserType = RegisterFormType & {
  id: number;
};

export type UserResponseType = {
  accessToken: string;
  user: UserType;
};
