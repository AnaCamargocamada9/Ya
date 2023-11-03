import React from 'react'



function Formulario({ nombre, cancion, onNombreChange, onCancionChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={onNombreChange} />
      </label>
      <label>
        Cancion:
        <input type="text" value={cancion} onChange={onCancionChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
