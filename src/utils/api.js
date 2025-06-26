
const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const text = await response.text();
    throw new Error(text || 'Server returned non-JSON response');
  }
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || data.error || 'Request failed');
  }
  return data;
};

// ================= Auth Methods =================
export const login = async ({ email, password }) => {
  const response = await fetch('https://backend-finale-6.onrender.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });
  const { user, access_token } = await handleResponse(response);
  localStorage.setItem('token', access_token);
  return user;
};

export const register = async ({ username, email, password }) => {
  const response = await fetch('https://backend-finale-6.onrender.com/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
    credentials: 'include'
  });
  return handleResponse(response);
};

// ================= User Methods =================
export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://backend-finale-6.onrender.com/me', {
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return handleResponse(response);
};

export const updateProfile = async ({ username, email }) => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://backend-finale-6.onrender.com/me', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ username, email }),
    credentials: 'include'
  });
  return handleResponse(response);
};

// ================= Recipe Methods =================
export const createRecipe = async ({ title, description, category, ingredients, instructions }) => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://backend-finale-6.onrender.com/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, description, category, ingredients, instructions }),
    credentials: 'include'
  });
  return handleResponse(response);
};

export const getRecipes = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://backend-finale-6.onrender.com/recipes', {
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return handleResponse(response);
};

export const deleteRecipe = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`https://backend-finale-6.onrender.com/recipes/${id}`, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return handleResponse(response);
};