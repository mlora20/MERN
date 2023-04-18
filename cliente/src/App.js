import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuarios from './EditarUsuarios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="AgregarUsuario">AgregarUsuario</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>} exact></Route>
          <Route path='/AgregarUsuarios' element={<AgregarUsuarios/>} exact></Route>
          <Route path='/EditarUsuarios' element={<EditarUsuarios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
