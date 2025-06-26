import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import * as api from '../utils/api';

jest.mock('../utils/api');

test('renders login form and handles submission', async () => {
  api.login.mockResolvedValue({ access_token: 'fake-token' });

  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Password')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText('Login'));

  expect(api.login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
});