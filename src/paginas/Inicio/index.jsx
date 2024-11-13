import styled from "styled-components";
import Whatsapp from "../../componentes/Whatsapp";
import Clientes from "./assets/background_clientes.png";
import Background from "./assets/background_banner.png";

const BannerEstilizado = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-position: center;
  margin-top: -2em;

  p {
    margin-left: 130px;
    font-size: 64px;
  }

  .marca {
    font-size: 90px;
    margin-left: 2em;
    color: #217d34;
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

const QuemSomosEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 800px;
  height: 90vh;

  .quem-somos {
    transform: rotate(270deg);
    font-size: 24px;
    width: 175px;
  }

  .estrategia {
    font-size: 64px;
    color: black;
    width: 756px;
    margin-left: 195px;
  }
`;

const ClientesEstilizado = styled.section`
  background-image: url(${Clientes});
  background-repeat: no-repeat;
  background-size: cover;
  height: 123vh;
`;

const TrabalhamosEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 195px;
  height: 100vh;
  gap: 215px;
  p {
    font-size: 64px;
  }

  .projetos {
    width: 755px;
    color: black;
  }

  .gerindo {
    color: #ffffff;
    text-align: center;
    width: 350px;
    margin: auto;
  }

  div {
    display: flex;
    align-items: center;
    width: 560px;
    height: 560px;
    background-color: #275831;
    border-radius: 50%;
  }
`;

export default function Inicio() {
  return (
    <>
      <BannerEstilizado>
        <div>
          <p>
            Coloque sua <br />
            <span className="marca">marca</span> <br />
            em uma posição <br />
            <span className="destaque">de destaque</span>
          </p>
        </div>
        <p className="nome">Vitor Machado</p>
      </BannerEstilizado>
      <Whatsapp
        texto={
          "Entre em contato e entenda como um design estratégico pode intervir no seu negócio!"
        }
      />
      <QuemSomosEstilizado>
        <p className="estrategia">
          Temos estratégia em nossa essência e trabalhamos incessantemente para
          criar soluções que gerem resultados reais.
        </p>
        <p className="quem-somos">Quem somos?</p>
      </QuemSomosEstilizado>
      <ClientesEstilizado />
      <TrabalhamosEstilizado>
        <p className="projetos">
          Nossos projetos vão além do produto final, buscamos através de
          metodologias eficientes interferir em todo o ecosistema do seu
          negócio!
        </p>
        <div>
          <p className="gerindo">Trabalhamos gerindo e gerando valor</p>
        </div>
      </TrabalhamosEstilizado>
    </>
  );
}
