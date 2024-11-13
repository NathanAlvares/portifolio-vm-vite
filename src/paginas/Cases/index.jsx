import Clientes from "./assets/background_clientes.png";
import Background from "./assets/background_banner.png";
import styled from "styled-components";
import Whatsapp from "../../componentes/Whatsapp"

const CasesEstilizado = styled.section`
  padding-bottom: 150px;
`

const BannerEstilizado = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-position: center;
  margin-top: -2em;

  .cases {
    margin-left: 194px;
    font-size: 64px;
    text-align: left;
    width: 435px;
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

const ClientesEstilizado = styled.section`
  background-image: url(${Clientes});
  background-repeat: no-repeat;
  background-size: cover;
  height: 123vh;
`;

const FrasesEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50vh;
  gap: 160px;
  padding-left: 195px;
  color: black;

  .estetica {
    width: 410px;
    font-size: 64px;
    text-align: left;
  }

  .objetivo {
    width: 950px;
  }

  .destaque1 {
    margin-left: 150px;
  }

  .destaque2 {
    margin-left: 35px;
  }

  .destaque3 {
    margin-left: 80px;
  }
`;

export default function Cases() {
  return (
    <CasesEstilizado>
      <BannerEstilizado>
        <div>
          <p className="cases">Alguns dos <span className="destaque">nossos cases</span> de sucesso</p>
        </div>
        <p className="nome">Vitor Machado</p>
      </BannerEstilizado>
      <ClientesEstilizado />
      <FrasesEstilizado>
        <p className="estetica">
          "Estética sem <span className="destaque1">estratégia</span> <span className="destaque2">faz do design</span> <span className="destaque3">ineficaz</span>."
        </p>
        <p className="objetivo">
          Nosso objetivo é projetar resultados para nossos clientes, não apenas
          criando, mas também traduzindo e comunicando o verdadeiro propósito de
          suas marcas. Porque mais do que simples produtos, buscamos revelar o
          valor único que só sua marca pode oferecer ao público.
        </p>
      </FrasesEstilizado>
      <Whatsapp 
        texto={"Qual o valor real de sua marca? Conta pra gente!"}
      />
    </CasesEstilizado>
  );
}
