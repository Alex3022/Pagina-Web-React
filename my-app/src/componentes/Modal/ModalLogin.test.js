import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ModalLogin from './ModalLogin';


test('modal opens when button is clicked', () => {
    render(<ModalLogin />);
  
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
  
    const modalTitle = screen.getByText('Iniciar Sesión');
    expect(modalTitle).toBeInTheDocument();
  });

test('modal closes when clicking on close button', () => {
  render(<ModalLogin />);

  const loginButton = screen.getByText('Login');
  fireEvent.click(loginButton);

  const closeButton = screen.getByText("x");
  fireEvent.doubleClick(closeButton);

  expect(screen.queryByText('Iniciar Sesion')).not.toBeInTheDocument();
});