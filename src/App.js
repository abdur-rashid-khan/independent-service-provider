import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/Page/About/About';
import Blog from './Components/Page/Blog/Blog';
import CheckOut from './Components/Page/CheckOut/CheckOut';
import Error from './Components/Page/Error/Error';
import TotalPhotos from './Components/Page/Gallery/TotalPhoto/TotalPhotos';
import Home from './Components/Page/Home/Home';
import Services from './Components/Page/Services/Services/Services';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<TotalPhotos />} />
          <Route path='/checkout/:id' element={<CheckOut />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
