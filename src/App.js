import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/Page/About/About';
import Error from './Components/Page/Error/Error';
import Home from './Components/Page/Home/Home';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
