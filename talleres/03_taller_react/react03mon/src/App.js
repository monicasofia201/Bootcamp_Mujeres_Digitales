import React, { Component } from 'react';
import './App.css';

// Componente principal: App
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ejercicios de Estado y Ciclo de Vida en React 03 Mon</h1>
        <Contador />
        <CicloDeVida />
        <ComponenteCombinado />
      </div>
    );
  }
}

/*
--- Ejercicio 1: Contador simple ---
Crea un componente que muestre un contador. Al hacer clic en un botón, el contador debe incrementarse.

Objetivo: Que los estudiantes entiendan cómo funciona this.state y el método setState para actualizar el estado.
*/

// Ejercicio 1: Contador simple
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementarContador = () => {
    this.setState(prevState => ({ contador: prevState.contador + 1 }));
  };

  render() {
    return (
      <div className="component">
        <h2>Contador Simple</h2>
        <div className="counter-display">
          <h3>{this.state.contador}</h3>
        </div>
        <button className="btn" onClick={this.incrementarContador}>
          Incrementar
        </button>
      </div>
    );
  }
}

/*
--- Ejercicio 2: Ciclo de vida de un componente ---
Crea un componente que muestre un mensaje en la consola cuando se monte, actualice y desmonte.

Objetivo: Que los estudiantes practiquen los métodos del ciclo de vida y vean cómo responden a cambios de estado.
*/

// Ejercicio 2: Ciclo de vida de un componente
class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      montado: true
    };
  }

  componentDidMount() {
    console.log('2.1. El componente se ha MONTADO - Ejercicio #2');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valor !== this.state.valor) {
      console.log('2.2. El componente se ha ACTUALIZADO - Ejercicio #2');
    }
    if (prevState.montado !== this.state.montado) {
      if (this.state.montado) {
        console.log('2.1. El componente se ha MONTADO - Ejercicio #2');
      } else {
        console.log('2.3. El componente se DESMONTÓ - Ejercicio #2');
      }
    }
  }

  incrementarValor = () => {
    this.setState(prevState => ({ valor: prevState.valor + 1 }));
  };

  toggleMontado = () => {
    this.setState(prevState => ({ montado: !prevState.montado }));
  };

  render() {
    return (
      <div className="component">
        <h2>Ciclo de Vida del Componente</h2>
        {this.state.montado ? (
          <>
            <div className="counter-display">
              <h3>{this.state.valor}</h3>
            </div>
            <button className="btn" onClick={this.incrementarValor}>
              Incrementar Valor
            </button>
          </>
        ) : (
          <p>El componente está desmontado</p>
        )}
        <button className="btn" onClick={this.toggleMontado}>
          {this.state.montado ? 'Desmontar' : 'Montar'} Componente
        </button>
      </div>
    );
  }
}

/*
Instrucciones:
1. Realiza ambos ejercicios en tu entorno de desarrollo. Intenta modificar el código para explorar cómo funcionan setState y los métodos del ciclo de vida.
2. Observa los mensajes en la consola cuando el componente se monta, actualiza y se desmonta.
3. Opcional: Crea un tercer componente que combine lo aprendido sobre setState y ciclo de vida (por ejemplo, un componente que cambie un valor cuando se actualice).
*/

// Componente Combinado
class ComponenteCombinado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      montado: true
    };
  }

  componentDidMount() {
    console.log('3.1. El componente combinado se ha MONTADO - Ejercicio #3');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log('3.2. El componente combinado se ha ACTUALIZADO - Ejercicio #3');
    }
    if (prevState.montado !== this.state.montado) {
      if (this.state.montado) {
        console.log('3.1. El componente combinado se ha MONTADO - Ejercicio #3');
      } else {
        console.log('3.3. El componente combinado se DESMONTÓ - Ejercicio #3');
      }
    }
  }

  incrementarContador = () => {
    this.setState(prevState => ({ contador: prevState.contador + 1 }));
  };

  toggleMontado = () => {
    this.setState(prevState => ({ montado: !prevState.montado }));
  };

  render() {
    return (
      <div className="component">
        <h2>Componente Combinado</h2>
        {this.state.montado ? (
          <>
            <div className="counter-display">
              <h3>{this.state.contador}</h3>
            </div>
            <button className="btn" onClick={this.incrementarContador}>
              Incrementar Combinado
            </button>
          </>
        ) : (
          <p>El componente combinado está desmontado</p>
        )}
        <button className="btn" onClick={this.toggleMontado}>
          {this.state.montado ? 'Desmontar' : 'Montar'} Componente Combinado
        </button>
      </div>
    );
  }
}

export default App;