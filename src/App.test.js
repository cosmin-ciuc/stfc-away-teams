import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mission label', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const missionLabelElement = screen.getByText('Mission:');
  expect(missionLabelElement).toBeInTheDocument();
});
