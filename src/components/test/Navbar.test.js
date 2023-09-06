import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

describe('Navbar', () => {
  test('renders the navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Companies List')).toBeInTheDocument();
    expect(screen.getByAltText('back')).toBeInTheDocument();
    expect(screen.getByAltText('mic')).toBeInTheDocument();
    expect(screen.getByAltText('setting')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
