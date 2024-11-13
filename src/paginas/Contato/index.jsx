import Background from "./assets/background_banner.png";
import styled from "styled-components";

const BannerEstilizado = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-position: center;
  margin-top: -2em;

  .texto {
    width: 495px;
    margin-left: 130px;
    font-size: 64px;
  }
  .destaque {
    margin-left: 1.2em;
  }

  .nome {
    margin-left: auto;
    font-size: 24px;
    transform: rotate(270deg);
  }
`;

export default function Contato() {
  return (
    <>
      <BannerEstilizado>
        <div>
          <p className="texto">
            Comece a planejar <span className="destaque">seu sucesso</span> com
            a gente!
          </p>
        </div>
        <p className="nome">Vitor Machado</p>
      </BannerEstilizado>
    </>
  );
}
