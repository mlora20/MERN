import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuarios from './EditarUsuarios';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN</h1>
      <ListaUsuarios/>
      <AgregarUsuarios/>
      <EditarUsuarios/>
    </div>
  );
}

export default App;
