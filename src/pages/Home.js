import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/context";
import Login from "./Login";
import Payment from "./Payment";
import Plan from "./Plan";
import SignUp from "./SignUp";

export default function Home() {
  const [info, setInfo] = useState(null)
  return (
    <Main>
      <UserContext.Provider value={{info, setInfo}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="subscriptions" element={<Plan />} />
            <Route path="subscriptions/:id" element={<Payment/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Main>
  );
}

const Main = styled.main`
  max-width: 500px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #0e0e13;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  position: relative;
`;
