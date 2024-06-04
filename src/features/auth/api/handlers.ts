'use client';
import { queryClient } from '@/lib/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { storage } from '../lib';
import { LoginFormType, RegisterFormType } from '../types';
import { getUser, loginWithEmailAndPassword, postUser } from './api';

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser().then((res) => res.data),
  });
}

export function useCreateUser() {
  return useMutation({
    mutationKey: ['user-create'],
    mutationFn: (data: RegisterFormType) =>
      postUser(data).then((res) => res.data),
    onSuccess: (data) => {
      storage.setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Usuário criado e logado!');
    },
    onError: (error: any) => {
      toast.error(error.response.data);
    },
  });
}

export function useLoginUser() {
  const router = useRouter();
  return useMutation({
    mutationKey: ['user-login'],
    mutationFn: (data: LoginFormType) =>
      loginWithEmailAndPassword(data).then((res) => res.data),
    onSuccess: (data) => {
      storage.setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.push('/');
      toast.success('Bem-vindo de volta, ' + data.user.name);
    },
    onError: (error: any) => {
      toast.error(error.response.data);
    },
  });
}
