import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inicio link', () => {
  render(<App />);
  const linkElement = screen.getByText(/inicio/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sobre link', () => {
  render(<App />);
  const linkElement = screen.getByText(/sobre/i);
  expect(linkElement).toBeInTheDocument();
});
