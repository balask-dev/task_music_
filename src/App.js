 
import './App.css';
import Login from './components/Login';
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    </Routes>
    </BrowserRouter>

    </>

  
   );
}

export default App;
