import React from 'react';
import {render, screen} from '@testing-library/react';
import {CityList} from './design-system/pages/CityList';

test('renders learn react link', () => {
  render(<CityList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
