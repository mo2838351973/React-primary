import React, {Component} from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav
} from './style';
class App extends Component {
  render(){
    return (
      <HeaderWrapper>
        <Logo />
        <Nav></Nav>
      </HeaderWrapper>
    )
  }
}

export default App;