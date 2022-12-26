import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  function autenticar(e){
    e.preventDefault();
  }
  return (
    <Main>
      <form onSubmit={autenticar}>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="CPF" required />
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button>ENTRAR</button>
      </form>
      <Link to={"/"}>
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  width: 85%;
  > form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    > input,
    > button {
      width: 100%;
      border-radius: 8px;
      border: none;
    }
    > input {
      height: 56px;
      padding: 0 0 0 14px;
      border: 2px solid black;
      outline: 2px solid black;
      ::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #7e7e7e;
      }
      :focus {
        outline-color: #ff4791;
      }
    }
    > button {
      height: 52px;
      margin-top: 8px;
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
