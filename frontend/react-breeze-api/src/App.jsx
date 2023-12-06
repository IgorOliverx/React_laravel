import { useState, useEffect } from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/login.jsx";
import Register from "./components/Register.jsx";
 import Servicos from "./components/Servicos.jsx"
import '../src/css/index.css';

function App(){
    const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar-scroll');
      const yPos = window.scrollY;
      const triggerPos = 250;

      if (yPos > triggerPos) {
        navbar.style.display = 'block';
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
      } else {
        navbar.style.display = 'none';
        navbar.style.position = 'relative';
        navbar.style.top = 'initial';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBtnMissaoClick = () => {
    // Your BtnMissao click logic here
  };

  const handleBtnVisaoClick = () => {
    // Your BtnVisao click logic here
  };

  const moveSlide = (direction, slideId) => {
    // Your moveSlide logic here based on the direction and slideId
    // Remember to use React state to update currentPosition
  };

  const scrollToSection = (sectionId) => {
    // Your scrollToSection logic here
  };

    return (
       
        //verificar como esta o link no pc do instrutor e fazer roteamento somente por link
            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/servicos" element={<Servicos />} />
                    
                </Routes>
            </div>
        

    );
}
export default App