function BotonReservarHora(props) {
  const getBloque = (isempty) => {
    if (!isempty) {
      return <p>agregar hora</p>;
    } else {
      return <p>+</p>;
    }
  };

  return (
    <button onClick={props.agendarHora}>
      {getBloque(props.isFullyAvailable)}
    </button>
  );
}

export default BotonReservarHora;
