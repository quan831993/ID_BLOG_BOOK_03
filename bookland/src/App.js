import Homepage from './components/Homepage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Catalog from './components/Catalog';
import Detail from './components/Detail';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

  );
}
export default App;
