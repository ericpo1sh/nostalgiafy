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
          <Route path='/nostalgiafy' element={<Store/>}/>
          <Route path='/nostalgiafy/About' element={<About/>}/>
          <Route path='/nostalgiafy/Checkout' element={<Checkout/>}/>
          <Route path='/nostalgiafy/Login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

