import React, { Component } from 'react';
import ButtonNumber from './ButtonNumber';
import ButtonTest from './ButtonTest';
import './MojBroj.css';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

class BtnNumGroup extends Component {
    state = {
        targetsArr: [],
        targetsArrButtons: [],
        inputsValuesArr: [],
        buttonsClickedArr: [],

        buttonsArray:[],
        buttonsClicked:[],
        gameStart:false,
        isActive: true
    }

    generateTarget = () => {  // pravi target brojeve

        let min = 1;
        let max = 9;
        let min1 = 100;
        let max1 = 900;
        let target1 = {id:1,value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target2 = {id:2,value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target3 = {id:3,value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target4 = {id:4,value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
        let index = Math.floor(Math.random() * 10);
        target5 = {id:5,value:target5[index],clicked:false}
        let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
        let index1 = Math.floor(Math.random() * 10);
        target6 = {id:6,value:target6[index1],clicked:false}
        let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

        let { targetsArr, buttonsArray } = this.state;
        buttonsArray=buttonsArray.slice();
        buttonsArray=[target1, target2, target3, target4, target5, target6];
        targetsArr = targetsArr.slice();
        targetsArr.push(target1, target2, target3, target4, target5, target6)

        this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, buttonsArray })
    }

    handleClick = (id, value) => {
        let { buttonsClickedArr, inputsValuesArr, isActive } = this.state;
        buttonsClickedArr = buttonsClickedArr.slice();
        inputsValuesArr = inputsValuesArr.slice();
      
         let buttonWasPressed= buttonsClickedArr.indexOf(id)>= 0; // pronalazi index dugmeta
         if(buttonWasPressed){  // proverava da li se index dugmeta nalazi u arrayu 
          null;              
         }else{
            buttonsClickedArr.push(id);
            inputsValuesArr.push(value);
            isActive = !isActive;
         }
           
        this.setState({buttonsClickedArr, inputsValuesArr, isActive});
    }

    NapraviDugme = () => {
        let { targetsArr,targetsArrButtons,isActive } = this.state; // uyima target vrednosti i ubacuje ih u novi niz u koji se posle ubacuju dugmad
              targetsArrButtons=targetsArrButtons.slice();
       this.setState({gameStart:true});
        for (let i in targetsArr) {
            let dugme =
             <ButtonNumber id={i} value={targetsArr[i]} 
                klik={()=>this.handleClick(i,targetsArr[i])} 
               />
                targetsArrButtons.push(dugme);
        }
        this.setState({ targetsArrButtons });
    }

    changeIsActiv=()=>{
      console.log('change')
    }
  
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
       this.setState({buttonsClickedArr, inputsValuesArr});
    }

    ButtonClicked=(i)=>{
        let {buttonsArray,buttonsClicked}=this.state;
        buttonsArray=buttonsArray.slice();
        buttonsClicked=buttonsClicked.slice();
        buttonsArray[i].clicked=true;
        buttonsClicked.push(buttonsArray[i].value)
        this.setState({buttonsArray,buttonsClicked});
        }

    render() {

        let dugmence=null;
             this.state.gameStart ? 
        dugmence=(
            this.state.buttonsArray.map((butt,i)=>{
                console.log(butt)
                return (<ButtonTest value={butt.value} 
                    id={i} 
                    isActive={butt.clicked}
                    clicked={()=>this.ButtonClicked(i)}
                    buttonsClicked={this.state.buttonsClicked}/>
                )
            })
           
        ):null;
        return (
            <div>
                <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div>
                {dugmence}
                <Score />
                <button className='button-functional' onClick={this.generateTarget}>IZABERI BROJ</button>
                <p onClick={this.NapraviDugme}> - NAPRAVI DUGME</p>
                <div>{
                    this.state.targetsArrButtons.map((dugme, i) => {
                        return <span key={i}>{dugme}</span>
                    })
                }</div>
                <button className='button-operand' onClick={() => this.OperandInput('+')}>+</button>
                <button className='button-operand' onClick={() => this.OperandInput('-')}>-</button>
                <button className='button-operand' onClick={() => this.OperandInput('*')}>*</button>
                <button className='button-operand' onClick={() => this.OperandInput('/')}>/</button>
                <button className='button-operand' onClick={() => this.OperandInput('(')}>(</button>
                <button className='button-operand' onClick={() => this.OperandInput(')')}>)</button>
                <div>
                 
                </div>
               
                <button className='button-functional' onClick={this.deleteLastInput}>DELETE</button>
                 <PlayersScreen inputsValuesArr={this.state.inputsValuesArr}/>      
                 <PlayersScreen buttonsClicked={this.state.buttonsClicked}/>      
            </div>
        );
    }

}
export default BtnNumGroup;