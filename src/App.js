import './App.css';
import { BrowserRouter ,Router,Route } from 'react-router-dom';
import NavBar from './COMPONENETES/NavBar/NavBar';
import Items from './COMPONENETES/ListItem/ListItem';
import { Routes } from 'react-router-dom';
import Carrito from './COMPONENETES/carrito/Carrito';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Items/>}/>
            <Route path='Carrito' element={<Carrito/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
