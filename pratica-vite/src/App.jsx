import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Clientes from './pages/clientes.jsx';
import Navigation from './components/navigation.jsx';

function App() {
  return(
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;