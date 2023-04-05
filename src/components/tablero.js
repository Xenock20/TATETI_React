import Cuadrilla from "./cuadrilla";

export default function Tablero({xIsNext, cuadrillas, onPlay}){

  function handleClick(i){
    if(cuadrillas[i] || calculaGanador(cuadrillas)){
      return;
    }
    const siguienteCuadrillas = cuadrillas.slice();
    if(xIsNext){
      siguienteCuadrillas[i] = 'X';
    }
    else{
      siguienteCuadrillas[i] = 'O';
    }
    onPlay(siguienteCuadrillas)
  }

  function calculaGanador(cuadrillas){
    const lineasMatriz = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lineasMatriz.length; i++) {
      const [a, b, c] = lineasMatriz[i];
      if (cuadrillas[a] && cuadrillas[a] === cuadrillas[b] && cuadrillas[a] === cuadrillas[c]) {
        return cuadrillas[a];
      }
    }

    return null;
  }

  const ganador = calculaGanador(cuadrillas);
  let estado;
  if (ganador) {
    estado = 'Ganador: ' + ganador;
  } else {
    estado = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
  }

  return(
  <>
  <div className="estado">{estado}</div>
    <div className="tablero-fila">
      <Cuadrilla valor={cuadrillas[0]} onCuadrillaClick={() => handleClick(0)}/>
      <Cuadrilla valor={cuadrillas[1]} onCuadrillaClick={() => handleClick(1)}/>
      <Cuadrilla valor={cuadrillas[2]} onCuadrillaClick={() => handleClick(2)}/>
    </div>
    <div className="tablero-fila">
      <Cuadrilla valor={cuadrillas[3]} onCuadrillaClick={() => handleClick(3)}/>
      <Cuadrilla valor={cuadrillas[4]} onCuadrillaClick={() => handleClick(4)}/>
      <Cuadrilla valor={cuadrillas[5]} onCuadrillaClick={() => handleClick(5)}/>
    </div>
    <div className="tablero-fila">
      <Cuadrilla valor={cuadrillas[6]} onCuadrillaClick={() => handleClick(6)}/>
      <Cuadrilla valor={cuadrillas[7]} onCuadrillaClick={() => handleClick(7)}/>
      <Cuadrilla valor={cuadrillas[8]} onCuadrillaClick={() => handleClick(8)}/>
    </div>
  </>
  )
}