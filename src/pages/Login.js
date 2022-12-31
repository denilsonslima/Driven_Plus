import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const navigate = useNavigate()
  const url = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
  const valor = useContext(UserContext);

  function autenticar(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(url, body)
      .then((res) => {
        navigate("subscriptions")
        valor.setInfo(res.data)
      })
      .catch((err) => {
        toast.error("Usuário e/ou senha inválidos!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        })
        console.log(err)
      });
  }

  return (
    <Main>
      <div>
        <img src={logo} alt="" />
      </div>
      <form onSubmit={autenticar}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setSenha(e.target.value)}
          minLength={4}
          required
        />
        <button>ENTRAR</button>
      </form>
      <Link to={"sign-up"}>
        <p>Não possuí uma conta? Cadastre-se</p>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  width: 85%;
  > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: center;
    > img {
      max-width: 300px;
      width: 100%;
      margin-bottom: 100px;
    }
  }
  > form {
    > input,
    > button {
      width: 100%;
      border-radius: 8px;
      border: none;
    }
    > input {
      height: 56px;
      padding: 0 0 0 14px;
      font-size: 14px;
      line-height: 16px;
      border: 2px solid black;
      outline: 2px solid black;
      ::placeholder {
        color: #7e7e7e;
      }
      :focus {
        outline-color: #ff4791;
      }
    }
    > input[type="password"] {
      margin: 16px 0 24px;
    }

    > button {
      height: 52px;
      background: #ff4791;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
    }
  }
  > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
    color: red;
    position: absolute;
    top: 10px;
    left: 0;
  }
  > a {
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    & p {
      margin-top: 26px;
    }
  }
`;
