import React, { Component } from 'react';

class PlayersScreen extends Component {

    state={
        btnClickedArr:[],
        solution:''
    }

    Calculate=()=>{
        let  btnClickedArr  = this.props.btnClickedArr;
        
        let solutionString=[];
           let solution= btnClickedArr.map(btn=>{
                return solutionString.push(btn.value)
            })
            solution= solutionString.toString();
            solution= solution.replace(/,/g, " ");
           let solutionLch=solution.slice(-1);
           solutionLch=Number(solutionLch);
            if(Number.isInteger(solutionLch)===true){
                solution=eval(solution);
                this.setState({solution});
            }else{
                solution='Lose upisana matematicka operacija';
                this.setState({solution});
            }
       
    }
 

    render() {
        let playersInput=this.props.btnClickedArr; 
            playersInput= playersInput.map((input,i)=>{
            return <span key={i}>{input.value}</span>
             })

        return (
            <div>
            <div className='playersIput'> {playersInput} = <span>{this.state.solution}</span> 
              
            </div>
            <br></br>
           
            <button className='button-functional' onClick={this.Calculate}>IZRACUNAJ</button>
            <button className='button-functional' onClick={this.generateSolution}>POGLEDAJ RESENJE</button>
          </div>
        );
    }
}

export default PlayersScreen;