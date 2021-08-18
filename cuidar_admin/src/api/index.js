import { toast } from 'react-toastify';

import api from './api';

export async function login(email, password) {
  try {
    const url = '/auth/login';
    const body = {
      email,
      password,
    };

    const result = await api.post(url, body);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}
