import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/Page/About/About';
import Blog from './Components/Page/Blog/Blog';
import CheckOut from './Components/Page/CheckOut/CheckOut';
import Error from './Components/Page/Error/Error';
import ForgetPassword from './Components/Page/ForgetPassword/ForgetPassword';
import TotalPhotos from './Components/Page/Gallery/TotalPhoto/TotalPhotos';
import Home from './Components/Page/Home/Home';
import Login from './Components/Page/Login/Login';
import Services from './Components/Page/Services/Services/Services';
import SignIn from './Components/Page/SignIn/SignIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<TotalPhotos />} />
          <Route path='/checkout/:id' element={
            <RequireAuth>
                <CheckOut />
            </RequireAuth>
          } />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sigIn' element={<SignIn />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/checkout' element={
            <RequireAuth>
            <CheckOut />
        </RequireAuth>
          } />
          <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
