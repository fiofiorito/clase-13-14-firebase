import './App.css'
import { Route, Routes } from "react-router";
import { Link, NavLink } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/details/:id">Detalle</Link></li>
          <li><Link to="/">Home</Link> </li>
        </ul>
      </nav>
      <h1>Clase 13 y 14 sobre firebase</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App
