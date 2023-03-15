import Homepage from './components/Homepage';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  );
}
export default App;
