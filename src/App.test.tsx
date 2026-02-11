import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should render the main heading', () => {
    render(<App />);
    
    // Check if the Vite + React text exists
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });
});