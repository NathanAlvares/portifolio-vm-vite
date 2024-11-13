import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Inicio from "./paginas/Inicio";
import Cases from "./paginas/Cases";
import Servicos from "./paginas/Servicos";
import Contato from "./paginas/Contato";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="cases" element={<Cases />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
