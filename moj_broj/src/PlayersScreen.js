import React, { Component } from 'react';

class PlayersScreen extends Component {


    render() {
        let playersInput=this.props.btnClickedArr; 
            playersInput= playersInput.map((input,i)=>{
            return <span key={i}>{input.value}</span>
             })

        return (
            <div>
            <div className='playersIput'> {playersInput} = <span>{this.props.solution} </span>               
            </div>
          </div>
        );
    }
}

export default PlayersScreen;