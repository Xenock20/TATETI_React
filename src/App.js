import Tablero from './components/tablero';
import { useState } from 'react';

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [historial, setHistorial] = useState([Array(9).fill(null)]);
  const [movimientoActual, setMovimientoActual] = useState(0);
  const cuadrillasActuales = historial[movimientoActual]


  function handlePlay(siguienteCuadrillas) {
    const siguienteHistorial = [...historial.slice(0, movimientoActual + 1), siguienteCuadrillas] 
    setHistorial(siguienteHistorial)
    setMovimientoActual(siguienteHistorial.length - 1)
    setXIsNext(!xIsNext)
  }

  function saltarA(siguienteMovimiento){
    setMovimientoActual(siguienteMovimiento)
    setXIsNext(siguienteMovimiento % 2 === 0)
  }

  const movimientos = historial.map((cuadrillas, movimiento) => {
    let descripcion;
    if(movimiento > 0){
      descripcion = "Ir al movimiento #" + movimiento;
    } else {
      descripcion = "Ir al inicio del juego";
    }
    return (
      <li key={movimiento}>
        <button onClick={() => saltarA(movimiento)}>{descripcion}</button>
      </li>
    )
  })

  return (
    <div >
      <div className='game-tablero'>
        <Tablero xIsNext={xIsNext} cuadrillas={cuadrillasActuales} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{movimientos}</ol>
      </div>
    </div>
  );
}

export default Game;
