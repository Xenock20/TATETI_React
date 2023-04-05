export default function Cuadrilla({valor, onCuadrillaClick}) {
  return(
    <button 
      className="cuadrilla"
      onClick={onCuadrillaClick}
    >
      {valor}
    </button>
  )
}
