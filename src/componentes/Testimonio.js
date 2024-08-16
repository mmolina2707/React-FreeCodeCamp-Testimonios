import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  const formattedTestimonio = props.testimonio.replace(/freeCodeCamp/g, "<strong>freeCodeCamp</strong>");

  return (
    <div className='contenedor-testimonio'>
      <img
        className='image-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`} // Uso de prop para alt dinámico
      />
    
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        {/* Usamos dangerouslySetInnerHTML para renderizar el HTML en el texto */}
        <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: formattedTestimonio }} />
      </div>
    </div>
  );
}

export default Testimonio;



