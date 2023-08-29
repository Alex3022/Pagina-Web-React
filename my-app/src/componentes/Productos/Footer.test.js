import { render, screen } from '@testing-library/react';
import {Footer}  from './componentes/Productos/Footer';

   test('Que el correo sea requerido', () => {
    render(<Footer />);
    const correo = screen.getByTestId('correo');
    expect(correo).toBeRequired();
}
)

 test('boton de enviar', () => {
    render(<Footer />);
    const boton = screen.getByTestId('boton');
    expect(boton).toBeDisabled();
 }
)