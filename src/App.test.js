import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the admin product manager interface', () => {
  localStorage.setItem('token', 'admin-token');
  localStorage.setItem('role', 'admin');
  window.history.pushState({}, '', '/admin-dashboard');

  render(<App />);

  expect(screen.getByText(/product manager/i)).toBeInTheDocument();
});
