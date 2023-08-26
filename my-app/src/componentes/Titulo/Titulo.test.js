import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Titulo from './titulo'; 

describe('titulo Component', () => {
  it('renders title with line break', () => {
    const { container } = render(<Titulo />);
    
    const titleElement = container.querySelector('.Titulo');
    expect(titleElement).toBeInTheDocument();

   
    const subtitleElement = container.querySelector('.Titulo br');
    expect(subtitleElement.nextSibling.textContent).toBe('Tienda Deportiva');
  });
});