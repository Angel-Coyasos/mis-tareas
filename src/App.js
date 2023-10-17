import './App.css';
import { ListaDeTareas } from './componentes/ListaDeTareas';
import { Logo } from './componentes/Logo';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <Logo freeCodeCampLogo={freeCodeCampLogo} />
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
