import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product/:id' element={<ProductDetails />} />

<Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
