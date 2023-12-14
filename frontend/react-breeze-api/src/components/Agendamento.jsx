import './../css/componentesCSS/agendamento.css';

const Agendamento = () => {
    return (
        <>
            <section className="container-agendamento">
                {/* Escolha o Pet */}
                <div className="div-agendamento agenda-1" >
                    <header class="header-agendamento">
                        <nav className="nav-agendamento">
                            <div class="exit-btn-section">
                                <button class="exit-btn">X</button>
                            </div>
                        </nav>
                    </header>
                    <div className="agendamento-title">
                        <h1>Escolha o seu PET</h1>
                    </div>
                    <div className="container-agenda">
                        <div className="card-opcao card-1">
                            <div className="circle-card">

                            </div>
                            <div className="content-opcao">
                                <h1>Ragnar</h1>
                            </div>
                            <div className="select-btn-section">
                                <button className="select-btn">Selecionar</button>
                            </div>
                        </div>

                        <div className="card-opcao card-2">
                            <div className="circle-card">

                            </div>
                            <div className="content-opcao">
                                <h1>Candle</h1>
                            </div>
                            <div className="select-btn-section">
                                <button className="select-btn">Selecionar</button>
                            </div>
                        </div>

                        <div className="card-opcao card-3">
                            <div className="circle-card">

                            </div>
                            <div className="content-opcao">
                                <h1>Gepeto</h1>
                            </div>
                            <div className="select-btn-section">
                                <button className="select-btn">Selecionar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Escolha do Local */}
                <div className="div-agendamento agenda-2">
                    <header class="header-agendamento">
                        <nav className="nav-agendamento">
                            <div class="exit-btn-section">
                                <button class="exit-btn">X</button>
                            </div>
                        </nav>
                    </header>
                    <div className="agendamento-title">
                        <h1>Escolha o Local</h1>
                    </div>
                    <div className="container-agenda-map">
                        <div className="map-section">

                        </div>
                        <div className="location-list-section">
                            <ul>
                                <li>Localização 1</li>
                                <li>Localização 2</li>
                                <li>Localização 3</li>
                                <li>Localização 4</li>
                                <li>Localização 5</li>
                                <li>Localização 6</li>
                                <li>Localização 7</li>
                                <li>Localização 8</li>
                                <li>Localização 9</li>
                                <li>Localização 10</li>
                                <li>Localização 11</li>
                                <li>Localização 12</li>
                                <li>Localização 13</li>
                                <li>Localização 14</li>
                                <li>Localização 15</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Escolha do Serviços*/}
                <div className="div-agendamento agenda-3">
                    <header class="header-agendamento">
                        <nav className="nav-agendamento">
                            <div class="exit-btn-section">
                                <button class="exit-btn">X</button>
                            </div>
                        </nav>
                    </header>
                    <div className="agendamento-title">
                        <h1>Escolha o Serviço</h1>
                    </div>
                </div>

                {/* Data e Hora */}
                <div className="div-agendamento agenda-4">
                    <header class="header-agendamento">
                        <nav className="nav-agendamento">
                            <div class="exit-btn-section">
                                <button class="exit-btn">X</button>
                            </div>
                        </nav>
                    </header>
                    <div className="agendamento-title">
                        <h1>Escolha o Dia e Horário</h1>
                    </div>
                </div>

                {/* Relatório e Concluido */}
                <div className="div-agendamento agenda-5">
                    <header class="header-agendamento">
                        <nav className="nav-agendamento">
                            <div class="exit-btn-section">
                                <button class="exit-btn">X</button>
                            </div>
                        </nav>
                    </header>
                    <div className="agendamento-title">
                        <h1>Relatório</h1>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Agendamento;
