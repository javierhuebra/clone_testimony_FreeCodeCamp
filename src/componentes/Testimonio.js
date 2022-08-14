import React from 'react';
import '../hojas-de-estilos/Testimonio.css';
function Testimonio(props) { //esto es exportacion nombrada, en app tengo que poner {Testimonio} las llaves dicen que es lo que se exporta
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`} />

      <div className='contenedor-texto-textimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> in {props.pais}</p>
        
        <p className='cargo-testimonio'>
          {props.cargo}at  <strong>{props.empresa}</strong></p>
        
        <p className='texto-testimonio'>
          "{props.testimonio}"</p>
      </div>

    </div>

  );
}

 export default Testimonio;  //exportacion normal(?)