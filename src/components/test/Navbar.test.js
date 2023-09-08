import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('NavBar', () => {
  test('navigates to the root path when the back button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByAltText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const backButton = getByAltText('back');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('renders the Navbar component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const navbar = getByTestId('navbar');
    expect(navbar).toBeTruthy();
  });
});
