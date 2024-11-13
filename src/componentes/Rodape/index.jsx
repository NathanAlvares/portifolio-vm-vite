import styled from "styled-components";
import Background from "./assets/background_rodape.png";
import BackgroundContato from "./assets/background_rodape_contato.png";
import { useLocation } from "react-router-dom";

const RodapeEstilizado = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 152px;
  color: #ffffff;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 194px;

  div {
    display: flex;
    flex-direction: column;
    width: 950px;
  }

  p {
    color: #e5e5e5;
  }

  button {
    width: 175px;
    height: 80px;
    border-radius: 50px;
    border: solid #ffffff 2px;
    background-color: transparent;
    color: #ffffff;
    font-size: 36px;
    margin-left: 570px;
    margin-right: auto;
    margin-top: 32px;
    cursor: pointer;
  }

  h3 {
    font-size: 64px;
    margin-top: 105px;
  }

  input {
    margin-top: 85px;
    width: 680px;
    height: 90px;
    border-radius: 50px;
    border: none;
    font-size: 36px;
    padding-left: 65px;
  }
`;

const RodapeContatoEstilizado = styled.footer`
  display: flex;
  flex-direction: row;
  height: 180vh;
  justify-content: space-between;
`;

const InfoContainerEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundContato});
  background-color: #275831;
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 150px 0 0 0;
  width: 40%;
  color: #ffffff;
  padding: 135px 0 0 130px;
  gap: 110px;
  h1 {
    font-size: 64px;
    width: 530px;
  }
`;

const ContatoContainerEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  gap: 90px;

  button {
    width: 174px;
    height: 80px;
    background-color: transparent;
    color: black;
    border: solid 3px #275831;
    border-radius: 50px;
    font-size: 36px;
    margin-left: auto;
  }

  div {
    display:flex;
    flex-direction: column;
    gap: 50px;
    padding-left: 195px;
  }

  div p {
    color: black;
    width: 495px;
    font-size: 64px;
  }

  .email input {
    width: 580px;
    height: 90px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 50px;
    padding-left: 75px;
    font-size: 36px;
  }

  input::placeholder{
    color: #275831;
    font-family: 'Gentium Plus', serif;
    font-weight: 400;
  }

  .desafios textarea {
    width: 580px;
    height: 440px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 50px;
    padding-left: 75px;
    padding-top: 20px;
    font-size: 36px;
    text-align: start;
    resize: none;

  }
  textarea::placeholder{
    color: #275831;
    font-family: 'Gentium Plus', serif;
    font-weight: 400;
  }
`

export default function Rodape({ path }) {
  const { pathname } = useLocation();
  if (pathname === "/contato") {
    return (
      <RodapeContatoEstilizado>
        <ContatoContainerEstilizado>
          <div className="email">
            <p>Deixe seu contato e retornaremos</p>
            <input type="text" placeholder="Deixe seu contato" />
            <button>Enviar</button>
          </div>
          <div className="desafios">
            <p>Queremos saber quais os seus desafios</p>
            <textarea  placeholder="Descreva o que te&#10;trouxe aqui" />
            <button>Enviar</button>
          </div>
        </ContatoContainerEstilizado>
        <InfoContainerEstilizado>
          <h1>Se preferir entrar em contato de outra forma.</h1>
          <p>
            vitor.machado.dg@gmail.com <br />
            <br />
            (41) 99978-3789 <br />
            <br />
            R. Fagundes Varela, 1023 - Jd. Social <br />
            Curitiba / PR
          </p>
        </InfoContainerEstilizado>
      </RodapeContatoEstilizado>
    );
  }
  return (
    <RodapeEstilizado>
      <div>
        <h3>
          Comece a planejar seu <br />
          sucesso com a gente!
        </h3>
        <input type="text" placeholder="Deixe seu contato" />
        <button>Enviar</button>
      </div>
      <p>
        vitor.machado.dg@gmail.com <br />
        <br />
        (41) 99978-3789 <br />
        <br />
        R. Fagundes Varela, 1023 - Jd. Social <br />
        Curitiba / PR
      </p>
    </RodapeEstilizado>
  );
}
