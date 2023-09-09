import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
describe('App', () => {
  test('renders App component with initial count value', () => {
    const { getByText } = render(<App />);
    // Check if the initial count value is 0
    const countElement = getByText('count is 0');
    expect(countElement).toBeInTheDocument();
  });

});