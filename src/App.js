import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';

function App(){
  return(
      <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="home"  element={<Home/>}/>
        <Route path="about"  element={<About/>}/>
        <Route path="contact"  element={<Contact/>}/>
        <Route path="login"  element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;