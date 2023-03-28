import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuarios from './EditarUsuarios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN</h1>
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
