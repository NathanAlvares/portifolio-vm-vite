import styled from "styled-components";
import Background from "./assets/background_banner.png";
import Whatsapp from "../../componentes/Whatsapp";

const BannerEstilizado = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-position: center;
  margin-top: -2em;

  .servicos {
    margin-left: 194px;
    font-size: 64px;
    text-align: right;
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

const ServicosEstilizado = styled.section`
  padding: 0px 50px;
  .construcao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 412px;
    color: white;
    background-color: #275831;
    border-radius: 50px;
    margin-bottom: 140px;
  }

  .textos {
    display: flex;
    flex-direction: row;
    padding: 0px 120px;
    gap: 195px;
  }

  p {
    width: 670px;
  }

  h1 {
    margin-left: 120px;
    font-size: 64px;
  }

  span {
    font-weight: 700;
  }
`;

const DescricoesEstilizado = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 185px;
`;

const CardEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 670px;
  height: fit-content;
  color: black;
  h1 {
    font-size: 64px;
  }
`;

export default function Servicos() {
  const tiposDeServico = [
    {
      titulo: "Interface (UI)",
      descricao:
        "Projeto de interface para as mais diversas finalidades, pensando não só no visual mas também em toda a arquitetura da informação compreendendo as atividades que devem ser desenvolvidas no contexto proposto, tudo para atingir os objetivos proposto pelo contratante.",
    },
    {
      titulo: "Embalagem",
      descricao:
        "Desenvolvimento de embalagens atrativas para motivar a compra, considerando diversos aspectos que definem o sucesso do projeto, como ergonomia, usabilidade, proteção do conteúdo, transporte e alinhamento com a legislação vigente.",
    },
    {
      titulo: "Serviços",
      descricao:
        "Traçamos toda a jornada do usuário do seu serviço para identificar possíveis problemas em seu processo, propondo assim soluções que forneçam a melhor experiência para seus clientes.",
    },
    {
      titulo: "Editorial",
      descricao:
        "Projeto voltado para os mais diversos materiais impressos e digitais, para garantir materiais funcionais, com uma excelente legibilidade, coesão estilística e hierarquia tudo de forma a integrar todos os elementos da composição e fornecer a melhor experiência para o leitor através do layout.",
    },
  ];
  return (
    <div style={{marginBottom: "130px"}}>
      <BannerEstilizado>
        <div>
          <p className="servicos">Quais serviços oferecemos?</p>
        </div>
        <p className="nome">Vitor Machado</p>
      </BannerEstilizado>
      <ServicosEstilizado>
        <div className="construcao">
          <h1>Construção de marca</h1>
          <div className="textos">
            <p>
              <span>Identidade visual:</span> Projeto focado em representar
              visualmente a sua marca, de forma que ela seja icônica e única, ao
              mesmo tempo que comunique o que sua empresa tem a oferecer, tudo
              alinhado à uma visão estratégica, compreendendo o mercado do seu
              setor e pensando em todas as áreas de contato com o cliente para
              que sua empresa seja consistente desde o primeiro contato.
            </p>
            <p>
              <span>Branding:</span> Trabalho contínuo de gestão de marca, para
              que sua empresa atinja novos patamares reconhecendo o que seu
              público entende como grandes diferenciais para o seu negócio e
              focando os esforços em transmitir esses princípios para que sua
              marca não seja apenas mais uma, mas crie uma comunidade para
              resultados consistentes a longo prazo alinhado aos seus objetivos.
            </p>
          </div>
        </div>
      </ServicosEstilizado>
      <DescricoesEstilizado>
        {tiposDeServico.map((servico, index) => (
          <CardEstilizado key={index}>
            <h1>{servico.titulo}</h1>
            <p>{servico.descricao}</p>
          </CardEstilizado>
        ))}
      </DescricoesEstilizado>
      <Whatsapp texto={"Solicite seu orçamento agora mesmo!"} />
    </div>
  );
}
