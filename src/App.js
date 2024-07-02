import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contato from './Contato';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' exact={true} element={<Home />}></Route>
      <Route path='/Menu' element={<Menu />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contato' element={<Contato />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
