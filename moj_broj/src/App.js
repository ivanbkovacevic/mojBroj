import React, { Component } from 'react';
import './MojBroj.css';
import BtnNumGroup from './BtnNumGroup';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

class App extends Component {
  render() {
    return (
      <div >
         <Score />
         <BtnNumGroup />
         <PlayersScreen />
      </div>
    );
  }
}

export default App;
