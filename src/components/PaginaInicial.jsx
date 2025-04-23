import { useNavigate } from "react-router-dom";

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
                <img src="../src/assets/INBEClogo.png" className="w-[300px] flex items-center" />
                <h2 className="text-[#1d1e46] flex justify-center text-4xl py-2 font-bold">GERENCIADOR DE PTTs</h2>
                <div className="container mx-auto py-5">
                    <div className="flex justify-center gap-10">

                        <div
                            className="bg-[#1d1e46] shadow-md rounded-lg text-center text-white hover:bg-[#0d0e31] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Arquitetura de S.O</p>
                            <button className="mt-44 px-4 py-2 w-[200px] bg-[#ffffff] text-[#1d1e46] rounded-lg hover:bg-[#18184f]
                "
                            >
                                Buscar
                            </button>
                        </div>
                        <div
                            className="bg-[#490c09] shadow-md rounded-lg text-center text-white hover:bg-[#2e0706] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Segurança da informação</p>
                            <button className="mt-44 px-4 py-2 w-[200px] bg-[#79121f] text-white rounded-lg hover:bg-[#1d1e46]">
                                Buscar
                            </button>
                        </div>
                        <div
                            className="bg-[#490c09] shadow-md rounded-lg text-center text-white hover:bg-[#2e0706] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Projeto Integrador</p>
                            <button className="mt-44 px-4 py-2 w-[200px] bg-[#79121f] text-white rounded-lg hover:bg-[#1d1e46]">
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 py-5">
                        <div
                            className="bg-[#490c09] shadow-md rounded-lg text-center text-white hover:bg-[#2e0706] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Redes de computadores</p>
                            <button className="mt-44 px-4 py-2 w-[200px] bg-[#79121f] text-white rounded-lg hover:bg-[#1d1e46]">
                                Buscar
                            </button>
                        </div>
                        <div
                            className="bg-[#490c09] shadow-md rounded-lg text-center text-white hover:bg-[#2e0706] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Programação com Python</p>
                            <button className="mt-44 px-4 py-2 w-[200px] bg-[#79121f] text-white rounded-lg hover:bg-[#1d1e46]">
                                Buscar
                            </button>
                        </div>
                        <div
                            className="bg-[#490c09] shadow-md rounded-lg text-center text-white hover:bg-[#2e0706] transition-all duration-300"
                            style={{ width: "282px", height: "313.95px" }}
                        >
                            <p className="text-lg font-medium mt-10">Banco de dados</p>
                            <button
                                to="/bancodedados" // Aqui a navegação ocorre declarativamente
                                className="mt-44 px-4 py-2 w-[200px] bg-[#79121f] text-white rounded-lg hover:bg-[#1d1e46]"
                                onClick={()=> 
                                    navigate("/bancodedados")
                                }
                            >
                                Buscar
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaginaInicial;





