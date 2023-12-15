import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";
import "./../css/index.css";
import Footer from "./Footer.jsx";
import HeaderLogin from "./subcomponents/HeaderLogin.jsx";
import "./../css/componentesCSS/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      setEmail("");
      setPassword("");
      setName("");
      setPasswordConfirmation("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <HeaderLogin /> */}
      <section className="section-cadastro">
        <div className="container-cadastro">

          <div className="form-cadastro">
            <div className="titulo-cadastro-form">Cadastro</div>
            <form onSubmit={handleRegister} className="container-inputs">
              {/* ---Nome--- */}
              <div className="div-name-cadastro">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className=""
                />
                <div className="">
                  <span className="">error</span>
                </div>
              </div>
              {/* ------- */}
              {/* ---Email--- */}
              <div className="div-email-cadastro">
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
              {/* ------- */}
              {/* ---Senha--- */}
              <div className="div-password-cadastro">
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
              {/* ------- */}
              {/* ---confirma senha--- */}
              <div className="div-confirm-password-cadastro">
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
              {/* -------- */}
              {/* --CEP-- */}
              <div className="div-cep-cadastro">
                <input
                  type=""
                  value={""}
                  //onChange
                  placeholder="Cep"
                  className="
                   
                  "
                />
                <div className="">
                  <span className="">error</span>
                </div>
              </div>
              {/* ------ */}
              {/* --Endereço-- */}
              <div className="div-endereco-cadastro">
                <input
                  type=""
                  value={""}
                  //onChange
                  placeholder="Endereço"
                  className="
                   
                  "
                />
                <div className="">
                  <span className="">error</span>
                </div>
              </div>
              {/* ------ */}
              <div className="div-button-cadastro">
                <button type="submit" className="">
                  Registrar
                </button>
              </div>
            </form>

            
          </div>
          <div className="div-img-cadastro">
            <p>Feliz Natal !</p>
            <img className="gatoCad"src="./../../assets/img/banner/felizNatalCadastro.jpg" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
