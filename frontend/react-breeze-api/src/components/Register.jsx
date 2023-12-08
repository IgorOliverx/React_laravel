import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../api/axios";
import './../css/index.css';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try{
            await  axios.post("/register", {
                name,
                email,
                password,
                password_confirmation
            });
            setEmail("");
            setPassword("");
            setName("");
            setPasswordConfirmation("");
            navigate("/");
        }catch (e) {
            console.log(e);
        }

    }

    return(
        <section className="">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">PetCandle</div>
                            <form onSubmit={handleRegister}>
                                <div className="">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName((e.target.value))}
                                        placeholder="Name"
                                        className=""
                                    />
                                    <div className="">
                                        <span className="">error</span>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className=""
                                    />
                                    <div className="">
                                        <span className="">error</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className=""
                  
                                    />
                                    <div className="flex">
                                        <span className="">error</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        placeholder="Password Confirmation"
                                        className="
                   
                  "
                                    />
                                    <div className="">
                                        <span className="">error</span>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <button type="submit" className="">
                                        Registrar
                                    </button>
                                </div>
                            </form>
                            <Link
                                to="/forgot-password"
                                className="
           
              "
                            >
                                Forgot Password?
                            </Link>
                            <p className="">
                                Not a member yet?
                                <Link to="/register" className="">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;