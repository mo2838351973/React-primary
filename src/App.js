import React, { Component } from 'react';
import { Globalstyle } from './style'
import Header from './common/header';

class App extends Component {
  render(){
    return (
      <div className="Dell">
        <Globalstyle/>
        <Header />
      </div>
    )
  }
}
export default App;