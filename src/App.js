import logo from './logo.svg';
import './App.css';
import Login from './comoponents/login/Login';
import Signup from './comoponents/Signup/Signup';
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comoponents/home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
