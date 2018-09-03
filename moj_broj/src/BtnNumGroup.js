import React, { Component } from 'react';
import ButtonNumber from './ButtonNumber';
import './MojBroj.css';

class BtnNumGroup extends Component {
    state={
        targetsArr:[],
        inputsValuesArr:[],
        inputsIndexArr:[],
        isActive:false
       
    }

    generateTarget = () => {
   
        let min = 1;
        let max = 9;
        let min1 = 100;
        let max1 = 900;
        let target1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let target2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let target3 = Math.floor(Math.random() * (max - min + 1)) + min;
        let target4 = Math.floor(Math.random() * (max - min + 1)) + min;
        let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
        let index = Math.floor(Math.random() * 10);
        target5 = target5[index];
        let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
        let index1 = Math.floor(Math.random() * 10);
        target6 = target6[index1];
        let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
        
        let {targetsArr}=this.state;
            targetsArr=targetsArr.slice();
            targetsArr.push(target1, target2, target3, target4,target5,target6)
        this.setState({ targetNumber, target1, target2, target3, target4,target5,target6,targetsArr })
       
      }

      handleClick=(id,value)=>{
          let {inputsIndexArr,inputsValuesArr,isActive}=this.state;
          inputsIndexArr=inputsIndexArr.slice();
          inputsValuesArr=inputsValuesArr.slice();
          inputsIndexArr.push(id)
          inputsValuesArr.push(value)
           isActive=!isActive;
          this.setState({inputsIndexArr,inputsValuesArr,isActive});
          console.log('TEST RODITEL '+id +' '+ value+' '+isActive)
      }
      changeClass=()=>{
        let {isActive}=this.state;
            isActive=!isActive
        this.setState({isActive});
        console.log(isActive+'CHANGE CLASS')
    }

    NapraviDugme=()=>{
        let {targetsArr}=this.state;
        for(let i in targetsArr){
          let dugme= <ButtonNumber id={i} value={targetsArr[i]} klasa={this.state.isActive}
           klik={()=>{this.handleClick(i,targetsArr[i]);
            this.changeClass()}}/>   
          targetsArr.push(dugme);
        }   
       this.setState({targetsArr});  
    }

    OperandInput=(i)=>{
        let {inputsValuesArr}=this.state;
        inputsValuesArr.push(i);
       
        this.setState({inputsValuesArr});
        console.log(i+' active')
    }
 
    render() {
        return (
            <div>
            <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div>
              <button className='button-functional' onClick={this.generateTarget}>IZABERI BROJ</button>
                <p onClick={this.NapraviDugme}> - NAPRAVI DUGME</p>
            <div>{
                this.state.targetsArr.map((dugme,i)=>{
                    return <span key={i}>{dugme}</span>
                })
                }</div>
            <button className='button-operand'  onClick={() => this.OperandInput('+')}>+</button>
            <button className='button-operand'  onClick={() => this.OperandInput('-')}>-</button>
            <button className='button-operand'  onClick={() => this.OperandInput('*')}>*</button>
            <button className='button-operand'  onClick={() => this.OperandInput('/')}>/</button>
            <button className='button-operand'  onClick={() => this.OperandInput('(')}>(</button>
            <button className='button-operand'  onClick={() => this.OperandInput(')')}>)</button>
        </div>
        );
    }
}

export default BtnNumGroup;