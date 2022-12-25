import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";
export default function Login() {
  return (
    <Main>
      <div>
        <img src={logo} alt="" />
      </div>
      <form onSubmit={""}>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
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
  > div {
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
      height: 52px;
      border-radius: 8px;
      border: none;
    }
    > input {
      padding-left: 14px;
      ::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #7e7e7e;
      }
      :focus {
        border: 2px solid black;
        outline: 2px solid #FF4791;
      }
    }
    > input[type="password"] {
      margin: 16px 0 24px;
    }

    > button {
      background: #ff4791;
      font-weight: 700;
      color: #fff;
    }
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
