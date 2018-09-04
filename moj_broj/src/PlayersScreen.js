import React, { Component } from 'react';

class PlayersScreen extends Component {
    render() {
        return (
            <div>

            {/* <h2>PLAYERS INPUT: {dupliNumMesasage} {this.dupliNumInRowMesasage} {this.operandMessage}</h2> */}
  
            <div className='playersIput'>{this.displayValue}  =
               <p className={this.showValue}> {this.value} </p>
              {/* <p>{this.score.message}</p> */}
  
            </div>
            <br></br>
            <button className='button-functional' onClick={this.Calculate}>IZRACUNAJ</button>
            <button className='button-functional' onClick={this.DeleteInputs}>OBRISI POSLEDNJE</button>
            <button className='button-functional' onClick={this.ClearAll}>RESETUJ SVE</button>
            <button className='button-functional' onClick={this.generateSolution}>POGLEDAJ RESENJE</button>
          
  
            
  
          </div>
        );
    }
}

export default PlayersScreen;