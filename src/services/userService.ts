import api from './api';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

interface SignInData {
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  const response = await api.post('/auth/sign-in', data);
  return response.data;
};

// Use this function to get user info with token
export const getUserInfo = async (token: string) => {
  const response = await api.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
