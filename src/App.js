import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./redux/actions";

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

    console.log(this.props)

    return (
      <CenteredContainer onClick={() => this.props.incrementCounter()}>
        {this.props.demo.counter}
      </CenteredContainer>
    );
  }
}

function mapStateToProps({ demo }){
  return { demo }
}

export default connect(mapStateToProps, actions)(App);
