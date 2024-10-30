import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, decrementar } from '../redux/actions';

function ReduxContador() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
    </div>
  );
}

export default ReduxContador;
