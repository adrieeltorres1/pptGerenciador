import { useNavigate } from "react-router-dom";
import { FaDraftingCompass, FaShieldAlt, FaProjectDiagram, FaNetworkWired, FaPython, FaDatabase } from "react-icons/fa";

const PaginaInicial = () => {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="min-h-screen"
                style={{
                    background: "linear-gradient(to bottom, #fdfdfd, #354ae4)",
                }}
            >
                <div className="flex justify-center py-4">
                    <img src="assets/INBEClogo.png" className="w-[300px]" />
                </div>

                <h2 className="text-[#1d1e46] text-center text-3xl py-2 font-bold">
                    GERENCIADOR DE PPTs
                </h2>

                <div className="container mx-auto py-5 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {[
                            { titulo: "Arquitetura de S.O", icone: <FaDraftingCompass size={70} />, caminho: "/sistemasoperacionais" },
                            { titulo: "Segurança da informação", icone: <FaShieldAlt size={70} />, caminho: "" },
                            { titulo: "Projeto Integrador", icone: <FaProjectDiagram size={70} />, caminho: "" },
                            { titulo: "Redes de computadores", icone: <FaNetworkWired size={70} />, caminho: "" },
                            { titulo: "Programação com Python", icone: <FaPython size={70} />, caminho: "" },
                            { titulo: "Banco de dados", icone: <FaDatabase size={70} />, caminho: "/bancodedados" },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#1d1e46] shadow-md rounded-lg text-center text-white hover:bg-[#0d0e31] transition-all duration-300 flex flex-col justify-between items-center p-4 w-full max-w-[282px] h-[313.95px]"
                            >
                                <div className="mt-6 mb-4">{card.icone}</div>
                                <p className="text-lg font-medium">{card.titulo}</p>
                                <button
                                    className="mt-4 px-4 py-2 w-full bg-white text-[#1d1e46] rounded-lg hover:bg-[#79121f] hover:text-white transition-all duration-300"
                                    onClick={() => card.caminho && navigate(card.caminho)}
                                >
                                    Buscar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <footer className="w-full flex flex-col items-center px-4 py-6 bg-[#1d1e46] text-white text-center text-sm sm:text-base mt-10">
                    <span>Desenvolvido de um aluno para alunos</span>
                    <a className="font-semibold hover:bg-[#79121f]" href="https://perfil-links.vercel.app/">Adriel Torres</a>
                </footer>
            </div>
        </>
    );
}

export default PaginaInicial;


