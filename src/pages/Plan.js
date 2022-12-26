import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../context/context";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Plan() {
  const navigate = useNavigate();
  const valor = useContext(UserContext);
  const [planos, setPlanos] = useState(null);
  const url =
    "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${valor.info.token}` } })
      .then((res) => {
        setPlanos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valor.info.token]);

  function verificar(id) {
    navigate(`/subscriptions/${id}`)
  }

  return (
    <Main>
      {planos ? (
        <>
          {" "}
          <h1>Escolha seu Plano</h1>
          <section>
            {planos.map((e) => (
              <div key={e.id} onClick={() => verificar(e.id)}>
                <img src={e.image} alt="" />
                <p>R$ {e.price}</p>
              </div>
            ))}
          </section>
        </>
      ) : (
        <div>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="130"
            visible={true}
          />
        </div>
      )}
    </Main>
  );
}

const Main = styled.main`
  width: 85%;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 24px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > div {
      max-width: 280px;
      width: 100%;
      height: 180px;
      border: 3px solid #7e7e7e;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      > img {
        max-width: 140px;
        width: 100%;
      }
      > p {
        max-width: 97px;
        width: 100%;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        white-space: nowrap;
      }
    }
  }

  > div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 316px) {
    section > div {
      flex-direction: column;
    }
  }
`;
