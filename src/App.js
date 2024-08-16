import "./App.css";
import Testimonio from "./componentes/Testimonio";
import testimoniosJson from './testimonios.json';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {testimoniosJson.map((testimonio, index) => (
        <Testimonio
          key={index}
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          testimonio={testimonio.testimonio}
        />
      ))}
    </div>
  );
}

export default App;