import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import styled from "styled-components";
import { useState } from "react";

const CabecalhoEstilizado = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding-right: 53px;
  padding-top: 36px;
`;

const ContainerCabecalhoEstilizado = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 520px;
  width: 100%;
`;

const ListaCabecalhoEstilizado = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 62px;
  li {
    width: 185px;
  }
`;

const ContainerMenuEstilizado = styled.div`
  width: 100%;
  padding-left: 194px;
  display: flex;
  height: ${(props) => (props.$isOpen ? "100vh" : "0")};
  transition: all 500ms ease-out;
  overflow: hidden;
  
  ul {
    display: flex;
    transition: all 500ms ease-out;
    flex-direction: column;
    gap: 87px;
    padding-top: 210px;
    color: #000000;
    font-size: 64px;
    text-decoration: none;
  }
  a:visited {
    color: #000000;
  }
`;

export default function Cabecalho() {
  const [isOpen, setOpen] = useState(false);

  return (
    <CabecalhoEstilizado>
      <ContainerCabecalhoEstilizado>
        <ListaCabecalhoEstilizado>
          <li>
            <p>Design estratégico</p>
          </li>
          <p>|</p>
          <li>
            <p>Gestão de marcas</p>
          </li>
          <p>|</p>
          <li>
            <p>Identidade visual</p>
          </li>
        </ListaCabecalhoEstilizado>
        <Hamburger
          rounded
          size={48}
          distance="sm"
          toggled={isOpen}
          toggle={setOpen}
        />
      </ContainerCabecalhoEstilizado>
      <ContainerMenuEstilizado $isOpen={isOpen}>
        <ul>
          <li>
            <NavLink to="./">Home</NavLink>
          </li>
          <li>
            <NavLink to="cases">Cases</NavLink>
          </li>
          <li>
            <NavLink to="servicos">Serviços</NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
        </ul>
      </ContainerMenuEstilizado>
    </CabecalhoEstilizado>
  );
}
