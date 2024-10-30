import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from '../components/Boton';

test('cambia el texto al hacer clic', () => {
  const { getByText } = render(<Boton />);
  const button = getByText('Hacer clic aquí');
  fireEvent.click(button);
  expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
});
