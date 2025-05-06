import { BrowserRouter, Route, Routes } from "react-router";
import BancoDeDados from "../pages/BancoDeDados";
import PaginaInicial from "./components/PaginaInicial";
import SistemasOperacionais from "../pages/SistemasOperacionais";
import SegurancaDaInformacao from "../pages/SegurancaDaInformacao";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<PaginaInicial/>}/>
       <Route path='/SistemasOperacionais' element={<SistemasOperacionais />}/>
       <Route path='/SegurancaDaInformacao' element={<SegurancaDaInformacao />}/>
       <Route path='/BancoDeDados' element={<BancoDeDados />}/>
       <Route path='*' element={<h1>Rota não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;