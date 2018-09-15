import React, { Component } from 'react';
import './css/mojbroj.css';
import BtnNumGroup from './Main';
import ModalWindow from './ModalWindow';


class App extends Component {
  render() {
    return (
      <div >
        <ModalWindow />
         <BtnNumGroup />
        
      </div>
    );
  }
}

export default App;
