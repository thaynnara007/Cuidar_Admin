import { toast } from 'react-toastify';

import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../utils/constants';
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

export async function getUsers(page = PAGE_DEFAULT, pageSize = PAGE_SIZE_DEFAULT) {
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

export async function getMe() {
  try {
    const url = `/user/me`;

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

export async function createUser(body, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/user';

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

export async function updateUser(userId, body, setIsLoading) {
  try {
    setIsLoading(true);

    const url = `/user/${userId}`;
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

export async function updateMe(body, setIsLoading) {
  try {
    setIsLoading(true);

    const url = `/user/me`;
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

export async function getPatients(page = PAGE_DEFAULT, pageSize = PAGE_SIZE_DEFAULT) {
  try {
    const url = `/patient?page=${page}&pageSize=${pageSize}`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function getPatient(id) {
  try {
    const url = `/patient/${id}`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function deletePatient(id, setIsLoading) {
  try {
    setIsLoading(true);
    const url = `/patient/${id}`;

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

export async function createPatient(body, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/patient';
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

export async function getCategories(page = PAGE_DEFAULT, pageSize = PAGE_SIZE_DEFAULT) {
  try {
    const url = `/category?page=${page}&pageSize=${pageSize}`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function deleteCategory(id, setIsLoading) {
  try {
    setIsLoading(true);
    const url = `/category/${id}`;

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

export async function createCategory(body, setIsLoading) {
  try {
    setIsLoading(true);

    const url = '/category';
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

export async function getCategory(id, includeActivities = true) {
  try {
    let url = `/category/${id}`;

    if (!includeActivities) url = `/category/${id}?includeActivities=false`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function updateCategory(body, id, setIsLoading) {
  try {
    setIsLoading(true);

    const url = `/category/${id}`;
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

export async function getActivities(categoryId, page = PAGE_DEFAULT, pageSize = PAGE_SIZE_DEFAULT) {
  try {
    const url = `/activity/category/${categoryId}/?page=${page}&pageSize=${pageSize}`;

    const result = await api.get(url);

    return result;
  } catch (error) {
    let msg = '';
    if (error.response) msg = error.response.data.error;
    else msg = 'Network failed';

    toast.error(msg);
  }
}

export async function deleteActivity(id, setIsLoading) {
  try {
    setIsLoading(true);
    const url = `/activity/${id}`;

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
