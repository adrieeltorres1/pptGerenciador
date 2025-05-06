import { useNavigate } from "react-router";

const BancoDeDados = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="sm:text-xl text-xl lg:text-3xl font-semibold bg-gray-100 py-8 text-center">Arquivos para estudo</h2>
      <div className="flex flex-wrap gap-6 justify-center items-center p-6 bg-gray-100 min-h-screen">
        <div className="bg-[#1d1e46] w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Banco de Dados I</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c] transition-all duration-300"
              onClick={() => {
                window.open("https://drive.google.com/uc?export=download&id=1Pu5Es8xgm40sBz6X5jKrtq6J6c9RvkXJ", "_blank");
              }}
            >
              Baixar PPT
            </button>
          </div>
        </div>

        <div className="bg-[#1d1e46] w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Banco de Dados II</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]"
              onClick={() => {
                window.open("https://drive.google.com/uc?export=download&id=1rqawT2HI8oQqzUeDuIpc42Av07wQQ6gl", "_blank");
              }}
              >
                Baixar PPT
                </button>
          </div>
        </div>

        {/* <div className="bg-[#1d1e46] w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 3</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]">Baixar PTT</button>
          </div>
        </div> */}

        {/* <div className="bg-[#1d1e46] w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 4</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]">Baixar PTT</button>
          </div>
        </div> */}

        {/* <div className="bg-[#1d1e46] w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 5</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]">Baixar PTT
            </button>
          </div>
        </div>

        <div className="bg-[#1d1e46] w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 6</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg hover:bg-[#4e151c]">Baixar PTT
            </button>
          </div>
        </div> */}

        <div className="flex justify-center w-full">
          <button
            className=" w-[200px] h-[40px] bg-vermelho-danger text-white font-medium rounded-full hover:bg-[#4e151c]"
            onClick={() =>
              navigate("/")
            }
          >
            Voltar
          </button>
        </div>
      </div>
    </>

  );
}

export default BancoDeDados;


