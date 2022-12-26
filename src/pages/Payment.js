import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import group from "../assets/img/Group.svg";
import price from "../assets/img/price.svg";

export default function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const valor = useContext(UserContext);
  const [dados, setDados] = useState(undefined);

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${valor.info.token}` } })
      .then((res) => {
        setDados(res.data);
        navigate(`/subscriptions/${id}`);
      })
      .catch((res) => console.log(res));
  }, [id, navigate, valor.info.token]);

  console.log(dados);
  return (
    <Main>
      {dados ? (
        <>
          {" "}
          <div>
            <img src={dados.image} alt="" />
          </div>
          <h1>{dados.name}</h1>
          <div>
            <img src={group} alt="" />
            <h2>Benefícios:</h2>
          </div>
          <ol>
            {dados.perks.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ol>
          <div>
            <img src={price} alt="" />
            <h2>Preço:</h2>
          </div>
          <p>R$ {dados.price} cobrados mensalmente</p>
          <form>
            <input type="text" placeholder="Nome impresso no cartão" />
            <input type="text" placeholder="Digitos do cartão" />
            <input type="text" placeholder="Código de segurança" />
            <input type="text" placeholder="Validade" />
            <button>ASSINAR</button>
          </form>
        </>
      ) : (
        <>carregando</>
      )}
    </Main>
  );
}

const Main = styled.main`
  width: 85%;
  div:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    margin: 12px 0 22px;
  }
  div:nth-of-type(2) {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  ol {
    list-style: decimal;
    list-style-position: inside;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  div:nth-of-type(3) {
    display: flex;
    gap: 5px;
    margin: 15px 0 7px;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  form {
    gap: 8px;
    margin-top: 34px;
    input {
      width: 100%;
      height: 56px;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 14px;
      font-size: 14px;
      line-height: 16px;
      color: #7e7e7e;
      border: 2px solid #0e0e13;
      outline: 2px solid #0e0e13;
      :focus {
        outline-color: #ff4791;
      }
    }

    input:nth-of-type(2) {
      margin: 8px 0;
    }

    input:nth-of-type(3) {
      width: 49%;
      padding-left: 6px;
      margin-right: 2%;
    }

    input:nth-of-type(4) {
      width: 49%;
      padding-left: 6px;
    }
    button {
      width: 100%;
      height: 52px;
      color: #ffffff;
      background: #ff4791;
      border-radius: 8px;
      border: none;
      margin-top: 12px;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }
`;
