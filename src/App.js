import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Login from './components/login/login.component';
import Insumos from './components/insumos/insumos.component';
import Inicio from './components/inicio/inicio.component';
import Compras from './components/compras/compras.component';
import Estoque from './components/estoque/estoque.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' index element={<Login />} />
        <Route path='/dashboard/' element={<AppLayout />}>
          <Route path='/dashboard/' element={<Inicio />} />
          <Route path='/dashboard/compras' element={<Compras />} />
          <Route path='/dashboard/estoque' element={<Estoque />} />
          <Route path='/dashboard/insumos' element={<Insumos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;