import React, { Component } from 'react';
import './css/mojbroj.css';
import Main from './Main';
import ModalWindow from './ModalWindow';


class App extends Component {
  render() {
    return (
      <div >
        <ModalWindow />
         <Main />
      </div>
    );
  }
}

export default App;
