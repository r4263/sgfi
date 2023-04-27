import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Inicio />} />
          <Route path='/compras' element={<Compras />} />
          <Route path='/estoque' element={<Estoque />} />
          <Route path='/insumos' element={<Insumos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;