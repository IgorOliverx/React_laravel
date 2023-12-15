import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import HeaderLogin from "./subcomponents/HeaderLogin.jsx";
import Footer from "./Footer.jsx";
import "./../css/index.css";
import "./../css/componentesCSS/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

 // const csrf = () => axios.get('/sanctum/csrf-cookie');
 const csrf = () => axios.get('/sanctum/csrf-cookie')

  const handleLogin = async (event) => {
    event.preventDefault();
    await csrf();
    try {
      const response = await axios.post("/login", { email, password });

      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setError("Ocorreu um erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <>
      {/* <HeaderLogin /> */}

      <section className="login">
        <div className="container-login">
          <div className="container-img-login">
            <img src="./../../assets/img/banner/felizNatalLogin.png" alt="" />
          </div>

          <form className="section-form" onSubmit={handleLogin}>
            <div className=" login-form">
              <div className="titleLogin">
                <span>Login</span>
              </div>

              <div className="div-email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className=""
                />
                {errors.email && (
                  <div className="flex">
                    <span className="qlqrcoisa">
                      {errors.email[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="div-senha">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  className=""
                />
                {errors.password && (
                  <div className="flex">
                    <span className="">{errors.password[0]}</span>
                  </div>
                )}
              </div>

              <div className="button-div-login">
                <button type="submit" className="">
                  Login
                </button>
              </div>
            </div>
            <Link to="/forgot-password" className="">
            Forgot Password?
          </Link>

          <p className="signUpButtonLogin">
            Não tem cadastro?
            <Link to="/register" className="text-primary hover:underline">
              Sign Up
            </Link>
            <img src="./../../assets/img/icones/icones_tec/presente.png" alt="" />
          </p>
          </form>

          
        </div>

        {error && (
          <div className="flex">
            <span className="text-red-400 text-sm m-2 p-2">{error}</span>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Login;
