const API_URL = process.env.REACT_APP_API_URL || 'https://backend-finale-6.onrender.com';

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const register = async ({ username, email, password }) => {
  const response = await fetch(`https://backend-finale-6.onrender.com/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  return handleResponse(response);
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse(response);
};

export const updateProfile = async ({ username, email }) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username, email }),
  });
  return handleResponse(response);
};

export const createRecipe = async ({ title, description, category }) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, category }),
  });
  return handleResponse(response);
};

export const getRecipes = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/items`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse(response);
};

export const deleteRecipe = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse(response);
};