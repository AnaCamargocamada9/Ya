import { useState } from 'react';
import './App.css';
import Card from './Card';
import Formulario from './Formulario';

function App() {


 const [nombre, setNombre] = useState('');
 const [cancion, setCancion] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setCancion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !cancion) {
      console.log();
    } 
  };

    return (
    <div className="App">

      <h1>Ficha de Estudiante</h1>

      <form
      
        nombre={nombre}
        Cancion={cancion}
        onNombreChange={handleNombreChange}
        onEdadChange={handleEdadChange}
        onSubmit={handleSubmit}
      />
    <Card nombre={nombre} cancion={cancion}/>
    <Formulario/>
    </div>
  );
}

export default App;

