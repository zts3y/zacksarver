import React from "react";
import styled from "styled-components"
import {Head } from "./components/Head"
import background from './resources/background.jpg';
import me from "./resources/zack.png"
import './App.css';

type Props = {
  className? : string
}

const AppWrapper = styled.div`
background-image: url(${background});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 19%;
`

function App({className} : Props) {
  return (
    <AppWrapper className={`App ${className}`}>
      <Head />
      <div className={`hero ${className}`} >
        <div className={`avatar ${className}`} />
        <h1>Zack Sarver</h1>
        <h4>Full-Stack Developer</h4>
      </div>
    </AppWrapper>
  );
}

export default styled(App)`
.hero{
  display: flex;
  align-items: center;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
}
.avatar {
  background-image: url(${me});
  background-size: cover;
  height: 200px;
  width: 200px;
}
`;
