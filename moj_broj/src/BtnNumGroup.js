import React, { Component } from 'react';
import ButtonNumber from './ButtonNumber';
import './MojBroj.css';

class BtnNumGroup extends Component {
    state = {
        targetsArr: [],
        inputsValuesArr: [],
        buttonsClickedArr: [],
        isActive: true
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

        let { targetsArr } = this.state;
        targetsArr = targetsArr.slice();
        targetsArr.push(target1, target2, target3, target4, target5, target6)
        this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, targetsArr })

    }

    handleClick = (id, value) => {
        let { buttonsClickedArr, inputsValuesArr, isActive } = this.state;
        buttonsClickedArr = buttonsClickedArr.slice();
        inputsValuesArr = inputsValuesArr.slice();
      
         let buttonWasPressed= buttonsClickedArr.indexOf(id) >= 0;

         if(buttonWasPressed){
          null;  
         }else{
            buttonsClickedArr.push(id);
            inputsValuesArr.push(value);
            isActive = !isActive;
         }
           
        this.setState({buttonsClickedArr, inputsValuesArr, isActive});
    }

    NapraviDugme = () => {
        let { targetsArr } = this.state;
        for (let i in targetsArr) {
            let dugme = <ButtonNumber id={i} value={targetsArr[i]} isActive={this.state.isActive}
                klik={() => this.handleClick(i, targetsArr[i])} />
            targetsArr.push(dugme);
        }
        this.setState({ targetsArr });
    }

    // izracunaj=(a,b)=>{
    //     let racun=a+b;
    // return racun;
    // }


    // fun=(a,b)=>{
    //     return a+b;
    // }

   
    // racun=(a)=>{
    //     let num1=5;
    //     let num2=5;
    //     let num3=3;
    //     let num4=2;
    //     let num5=15;
    //         let calc=[];
    //         let calcR=[];
    //         let calcRR=[];
    //         for(let i=1;i<10;i++){
    //             for(let j=1;j<10;j++){
    //                 for(let k=1;k<10;k++){
    //                     for(let l=1;l<10;l++){
    //                         for(let m=10;m<20;m++){
    //                                 if(i+j+k+l+m==a){
    //                                     calcR.push([i,j,k,l,m])
    //                                    }        
    //                         }
    //                     } 
    //                 }
                  
    //               calc.push( this.fun(i,j));
    //                 console.log(calcR);
    //                // console.log(calcB);
    //                 console.log(calc);
    //             }
    //             } 


    //             for(let q in calcR){
    //                 for(let w in calcR[q]){
    //                     if(calcR[q][w]==num2){
    //                         calcRR.push(calcR[q])
    //                         console.log(calcR[q])
    //                      }
    //                 }      
    //             }
    //             console.log(calcRR)
                
    //   }
   
  
    OperandInput = (i) => {
        let { inputsValuesArr } = this.state;
        inputsValuesArr.push(i);

        this.setState({ inputsValuesArr });
        console.log(i + ' active')
    }

    deleteLastInput=()=>{
    let { buttonsClickedArr, inputsValuesArr } = this.state;
       buttonsClickedArr.pop();
       inputsValuesArr.pop();
       console.log(buttonsClickedArr , inputsValuesArr)
       let prazno='praznooooooo'
       this.setState({buttonsClickedArr, inputsValuesArr,prazno});
      
    }

    render() {
        return (
            <div>
                <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div>
                <button className='button-functional' onClick={this.generateTarget}>IZABERI BROJ</button>
                <p onClick={this.NapraviDugme}> - NAPRAVI DUGME</p>
                <div>{
                    this.state.targetsArr.map((dugme, i) => {
                        return <span key={i}>{dugme}</span>
                    })
                }</div>
                <button className='button-operand' onClick={() => this.OperandInput('+')}>+</button>
                <button className='button-operand' onClick={() => this.OperandInput('-')}>-</button>
                <button className='button-operand' onClick={() => this.OperandInput('*')}>*</button>
                <button className='button-operand' onClick={() => this.OperandInput('/')}>/</button>
                <button className='button-operand' onClick={() => this.OperandInput('(')}>(</button>
                <button className='button-operand' onClick={() => this.OperandInput(')')}>)</button>
                <button className='button-functional' onClick={this.deleteLastInput}>DELETE</button>
               
                
            {/* <button onClick={this.racun(20)}>dugme</button> */}       
            </div>
        );
    }
}

export default BtnNumGroup;