import { useNavigate } from "react-router";

const BancoDeDados = () => {
  const navigate = useNavigate();
  return (
    <>

      <div className="flex flex-wrap gap-6 justify-center items-center p-6 bg-gray-100 min-h-screen">

        <div className="bg-cyan-950 w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 1</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg"
              onClick={() => {
                window.open("https://drive.google.com/uc?exporte=download&id=1JbfzlZ9B5X11JUFeinDRIO52pdRcwUBF", "_blank");
              }}
              >
                Baixar PTT
            </button>
          </div>
        </div>

        <div className="bg-cyan-950 w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 2</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg">Baixar PTT</button>
          </div>
        </div>

        <div className="bg-cyan-950 w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 3</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg">Baixar PTT</button>
          </div>
        </div>

        <div className="bg-cyan-950 w-[350px] h-[250px]  rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 4</h2>
          <div className="flex justify-center mt-28" >
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg">Baixar PTT</button>
          </div>
        </div>

        <div className="bg-cyan-950 w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 5</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg">Baixar PTT
            </button>
          </div>
        </div>

        <div className="bg-cyan-950 w-[350px] h-[250px] rounded-lg text-white shadow-md">
          <h2 className="flex justify-center text-xl font-bold mb-4 mt-5">Aula 6</h2>
          <div className="flex justify-center mt-28">
            <button
              className=" px-6 py-3 bg-vermelho-danger text-white font-medium rounded-lg">Baixar PTT
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <button
            className=" w-[200px] h-[40px] bg-vermelho-danger text-white font-medium rounded-full"
            onClick={()=> 
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


