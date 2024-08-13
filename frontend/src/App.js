import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './Pages/Store';
import About from './Pages/About';
import Checkout from './Pages/Checkout';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Store/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

