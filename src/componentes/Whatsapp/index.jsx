import styled from "styled-components";

const WhatsappEstilizado = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 34px;
  border: solid 3px #275831;
  border-radius: 200px;
  margin: 100px 560px 0 auto;
  width: 796px;
  height: fit-content;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #275831;
    transition-duration: 500ms;
    color: #ffffff;
  }

  &:hover path {
    transition-duration: 500ms;
    stroke: #ffffff;
  }

  button {
    width: 60px;
    height: 45px;
    margin-right: 65px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  p {
    width: 550px;
    height: 100%;
    font-size: 36px;
    text-align: center;
    margin-left: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default function Whatsapp({ texto }) {
  return (
    <WhatsappEstilizado>
      <p>{texto}</p>
      <button>
        <svg
          width="56"
          height="44"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.02085 2.05678L53.2484 21.6506L3.0208 41.2445L15.3397 22.1934L15.6909 21.6504L15.3397 21.1074L3.02085 2.05678Z"
            stroke="#275831"
            strokeWidth="2"
          />
          <path d="M54 21.6504L15 21.6504" stroke="#275831" strokeWidth="2" />
        </svg>
      </button>
    </WhatsappEstilizado>
  );
}
