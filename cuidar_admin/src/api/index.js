import { toast } from 'react-toastify';

import api from './api';

export async function login(email, password, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/auth/login';
    const body = {
      email,
      password,
    };

    const result = await api.post(url, body);

    setIsLoading(false);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    setIsLoading(false);
    toast.error(msg);
  }
}

export async function sendRecoveryPasswordEmail(email, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/user/forgetPassword';
    const body = {
      email,
    };

    const result = await api.post(url, body);

    setIsLoading(false);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    setIsLoading(false);
    toast.error(msg);
  }
}

export async function verifyCode(email, code, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/auth/verifyCode';
    const body = {
      email,
      code,
    };

    const result = await api.post(url, body);

    setIsLoading(false);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    setIsLoading(false);
    toast.error(msg);
  }
}

export async function changePassword(password, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/user/changePassword';
    const body = {
      newPassword: password,
    };

    const result = await api.put(url, body);

    setIsLoading(false);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    setIsLoading(false);
    toast.error(msg);
  }
}

export async function getUsers(page = 1, pageSize = 10) {
  try {
    const url = `/user?page=${page}&pageSize=${pageSize}`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function deleteUser(id, setIsLoading) {
  try {
    setIsLoading(true);
    const url = `/user/${id}`;

    const result = await api.delete(url);

    setIsLoading(false);
    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    setIsLoading(false);
    toast.error(msg);
  }
}

export async function getPermissions() {
  try {
    const url = `/permission`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}
