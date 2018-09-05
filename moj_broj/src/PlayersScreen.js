import React, { Component } from 'react';

class PlayersScreen extends Component {

    state={
        printedValues:[]
    }
    
    componentDidUpdate=(prevProps, prevState)=>{
        let {printedValues}=this.state;
             printedValues=printedValues.slice();
        if ( this.props.inputsValuesArr !== prevProps.inputsValuesArr) {
            this.setState({ printedValues:this.props.inputsValuesArr});
          }       
        }

    render() {
       let playersInput =  this.state.printedValues.map((input,i)=>{
            return <span>{input}</span>
             })
        return (
            <div>

            {/* <h2>PLAYERS INPUT: {dupliNumMesasage} {this.dupliNumInRowMesasage} {this.operandMessage}</h2> */}
  
            <div className='playersIput'> {playersInput} =
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