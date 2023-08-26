import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Modal from './modal'; 

describe('Modal Component', () => {
  it('renders Modal content when isOpen is true', () => {
    const { getByTestId, getByText } = render(
      <Modal isOpen={true} closeModal={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );
   
    
   
    expect(getByText('Modal Content')).toBeInTheDocument();
  });
  
  it('does not render modal content when isOpen is false', () => {
    render(<Modal isOpen={false} closeModal={() => {}}>
      <div>Contenido del Modal</div>
    </Modal>);
    
    const ModalContent = screen.queryByText('Contenido del modal');
    expect(ModalContent).not.toBeInTheDocument();
  });
  
  it('calls closeModal when clicking on close button', () => {
    const closemodalMock = jest.fn();
    render(<Modal isOpen={true} closeModal={closemodalMock}>
      <div>Contenido del modal</div>
    </Modal>);
    
    const closeButton = screen.getByText('x');
    fireEvent.click(closeButton);
    expect(closemodalMock).toHaveBeenCalledTimes(1);
  });
});