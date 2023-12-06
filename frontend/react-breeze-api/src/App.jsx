import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/login.jsx";
import Register from "./components/Register.jsx";
import '../src/css/index.css';

function App(){
    return (
       
            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        

    );
}
export default App