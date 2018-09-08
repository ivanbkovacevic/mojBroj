import React, { Component } from 'react';

class PlayersScreen extends Component {

    state={
        buttonsClicked:[],
      
    }


    render() {

        let playersInput=this.props.buttonsClicked;
            playersInput= playersInput.map((input,i)=>{
            return <span key={i}>{input.value}</span>
             })

        return (
            <div>
          
            <div className='playersIput'> {playersInput} =
               <p className={this.showValue}> {this.value} </p>
       
            </div>
            <br></br>
            <button className='button-functional' onClick={this.Calculate}>IZRACUNAJ</button>
            <button className='button-functional' onClick={this.ClearAll}>RESETUJ SVE</button>
            <button className='button-functional' onClick={this.generateSolution}>POGLEDAJ RESENJE</button>
          </div>
        );
    }
}

export default PlayersScreen;