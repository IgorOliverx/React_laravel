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
                    <div className="container-agenda">
                        
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
                </div>

            </section>
        </>
    );
};

export default Agendamento;
