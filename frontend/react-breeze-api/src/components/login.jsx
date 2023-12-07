import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import './../css/index.css';

const Login = () => {
    // Inicialização dos estados para armazenar o email, a senha e a função de navegação
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    //axios.defaults.header.common['X-CSRF-TOKEN'] = document.querySelector()


    // Função para lidar com o login
    const handleLogin = async (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário de ser executado (recarregar a página)
        try {
            // Tentativa de fazer uma requisição POST usando Axios para o endpoint '/login', enviando email e senha
            await axios.post('/login', { email, password });

            // Limpa os campos de email e senha após o login ser bem-sucedido
            setEmail("");
            setPassword("");

            // Navega para a página inicial após o login bem-sucedido
            navigate("/");
        } catch (error) {
            console.log(error); // Em caso de erro, imprime o erro no console
            setError(error.response.data.message)
        }
    }

    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="
                  relative
                  mx-auto
                  max-w-[525px]
                  overflow-hidden
                  rounded-lg
                  bg-white
                  py-16
                  px-10
                  text-center
                  sm:px-12
                  md:px-[60px]
                "
                        >
                            <div className="mb-10 text-center md:mb-16">Laraveller</div>
                            <form onSubmit={handleLogin}>
                                {/* Campo de input para o email */}
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="
                        bordder-[#E9EDF4]
                        w-full
                        rounded-md
                        border
                        bg-[#FCFDFE]
                        py-3
                        px-5
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus:border-primary
                        focus-visible:shadow-none
                      "
                                    />
                                    {/* Campo para exibir mensagem de erro, se necessário */}
                                    <div className="flex">
                                        <span className="text-red-400 text-sm m-2 p-2">error</span>
                                    </div>
                                </div>
                                {/* Campo de input para a senha */}
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="
                        bordder-[#E9EDF4]
                        w-full
                        rounded-md
                        border
                        bg-[#FCFDFE]
                        py-3
                        px-5
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus:border-primary
                        focus-visible:shadow-none
                      "
                                    />
                                    {/* Campo para exibir mensagem de erro, se necessário */}
                                    <div className="flex">
                                        <span className="text-red-400 text-sm m-2 p-2">error</span>
                                    </div>
                                </div>
                                {/* Botão para enviar o formulário de login */}
                                <div className="mb-10">
                                    <button
                                        type="submit"
                                        className="
                        w-full
                        px-4
                        py-3
                        bg-indigo-500
                        hover:bg-indigo-700
                        rounded-md
                        text-white
                      "
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            {/* Link para a página de redefinição de senha */}
                            <Link
                                to="/forgot-password"
                                className="
                  mb-2
                  inline-block
                  text-base text-[#adadad]
                  hover:text-primary hover:underline
                "
                            >
                                Forgot Password?
                            </Link>
                            {/* Texto para o caso de o usuário não ser um membro */}
                            <p className="text-base text-[#adadad]">
                                Not a member yet?
                                {/* Link para a página de registro */}
                                <Link to="/register" className="text-primary hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {error && (
                <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">{error}</span>
                </div>
            )}
        </section>
    );
}

export default Login;
