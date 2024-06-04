import { axios } from '@/lib/api-client';
import { toast } from 'sonner';
import { storage } from '../lib';
import {
  LoginFormType,
  RegisterFormType,
  UserResponseType,
  UserType,
} from '../types';

export async function getUser() {
  return axios.get<UserType>('/users/me');
}

export async function postUser(data: RegisterFormType) {
  return axios.post<UserResponseType>('/register', data);
}

export async function loginWithEmailAndPassword(data: LoginFormType) {
  return axios.post<UserResponseType>('/login', data);
}

export function logout() {
  storage.clearToken();
  toast.success('Você foi deslogado');
}
