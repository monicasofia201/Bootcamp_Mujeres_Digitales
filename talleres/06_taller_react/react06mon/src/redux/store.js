import { createStore } from 'redux';

function contadorReducer(state = { contador: 0 }, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

// Crear el store
const store = createStore(contadorReducer);

export default store;
