import { useNavigate } from "react-router";

const ProjetoIntegrador = () => {
    const Navigate = useNavigate();
    return (
        <>
            <h2 className="sm:text-xl text-xl lg:text-3xl font-semibold bg-gray-100 py-8 text-center">Arquivos para estudo. (AV2)</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center p-6 bg-gray-100 min-h-screen">
                <div className="bg-[#1d1e46] w-[350px] h-[250px] rounded-lg text-white shadow-md">
                    <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Arquivo para estudo</h2>
                    <div className="flex justify-center mt-28">
                        <button
                            className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c] transition-all duration-300"
                        onClick={() => {
                          window.open("https://drive.google.com/uc?export=download&id=1hlUeXVruFrFC3SVETSvT5VXJTRHnS-zG", "_blank");
                        }}
                        >
                            Baixar PPT
                        </button>
                    </div>
                </div>

                <div className="bg-[#1d1e46] w-[350px] h-[250px]  rounded-lg text-white shadow-md">
                    <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Pendente aula</h2>
                    <div className="flex justify-center mt-28" >
                        <button
                            className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]"
                        // onClick={() => {
                        //   window.open("", "_blank");
                        // }}
                        >
                            Baixar PPT
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <button
                        className=" w-[200px] h-[40px] bg-vermelho-danger text-white font-medium rounded-full hover:bg-[#4e151c]"
                        onClick={() =>
                            Navigate("/")
                        }
                    >
                        Voltar
                    </button>
                </div>
            </div>

        </>
    );
}

export default ProjetoIntegrador;