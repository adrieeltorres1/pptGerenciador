import { BrowserRouter, Route, Routes } from "react-router";
import BancoDeDados from "../pages/BancoDeDados";
import PaginaInicial from "./components/PaginaInicial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<PaginaInicial/>}/>
       <Route path='/bancodedados' element={<BancoDeDados/>}/>
       <Route path='*' element={<h1>Rota não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;