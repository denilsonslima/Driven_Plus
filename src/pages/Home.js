import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Home() {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

const Main = styled.main`
  max-width: 500px;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0px 0px 10px black;
  background-color: #0e0e13;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
`;
