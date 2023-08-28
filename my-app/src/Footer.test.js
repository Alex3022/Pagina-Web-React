import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('Correo requerido', () => {
    render(<Footer></Footer>);
    const correoRe = screen.getByTestId('correo electronico');
    expect(correoRe).toBeRequired();
}
)

test('boton', () => {
    render(<Footer></Footer>);
    const correoRe = screen.getByTestId('boton');
    expect(correoRe).toBeRequired();
}
)
