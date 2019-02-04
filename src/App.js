import React, { Component } from 'react';
import styled from "styled-components";

const CenteredContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  font-weight: 600;
  font-family: 'ZCOOL KuaiLe', cursive;
  background-color: #2c3e50;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <CenteredContainer>
        5
      </CenteredContainer>
    );
  }
}

export default App;
