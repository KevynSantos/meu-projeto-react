import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Routes  } from 'react-router-dom';
import Home from './pages/Home'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';

function App() {

  return (
    <Router>
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/empresa">Empresa</Link>
          </li>
          <li>
              <Link to="/contato">Contato</Link>
          </li>
      </ul>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contato" element={<Contato/>}/>
          <Route exact path="/empresa" element={<Empresa/>}/>
        </Routes>
    </Router>
  )
}

export default App;
