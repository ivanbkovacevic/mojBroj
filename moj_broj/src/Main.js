import React, { Component } from 'react';
import ButtonOperator from './ButtonOperator';
import ButtonNumber from './ButtonNumber';
import './MojBroj.css';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

class BtnNumGroup extends Component {
    state = {
        targetsArr: [],
        targetNumber:0,
        targetsArrButtons: [],
      
////////////////////////////////
        buttonsArray:[],
        buttonsClicked:[ {id:0, value:'', clicked:null}],

        gameStart:false,
        isActive: true
    }

    generateTarget = () => {  // pravi target brojeve i dumad kao objekti
        let min = 1;
        let max = 9;
        let min1 = 100;
        let max1 = 900;
        let operand1 = {id:7, value:'+', clicked:false};
        let operand2 = {id:8, value:'-', clicked:false};
        let operand3 = {id:9, value:'*', clicked:false};
        let operand4 = {id:10, value:'/', clicked:false};
        let operand5 = {id:11, value:'(', clicked:false};
        let operand6 = {id:12, value:')', clicked:false};
        let target1 = {id:1, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target2 = {id:2, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target3 = {id:3, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target4 = {id:4, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false}
        let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
        let index = Math.floor(Math.random() * 10);
        target5 = {id:5, value:target5[index], clicked:false}
        let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
        let index1 = Math.floor(Math.random() * 10);
        target6 = {id:6, value:target6[index1], clicked:false}
        let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

        let { targetsArr, buttonsArray,gameStart } = this.state;
        gameStart=true;
        buttonsArray=buttonsArray.slice();
        buttonsArray=[target1, target2, target3, target4, target5, target6,
            operand1,operand2,operand3,operand4,operand5,operand6];

        targetsArr = targetsArr.slice();
        targetsArr.push(target1, target2, target3, target4, target5, target6);

        this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, buttonsArray,gameStart })
    }

    // handleClick = (id, value) => {
    //     let { buttonsClickedArr, inputsValuesArr, isActive } = this.state;
    //     buttonsClickedArr = buttonsClickedArr.slice();
    //     inputsValuesArr = inputsValuesArr.slice();
      
    //      let buttonWasPressed= buttonsClickedArr.indexOf(id)>= 0; // pronalazi index dugmeta
    //      if(buttonWasPressed){  // proverava da li se index dugmeta nalazi u arrayu 
    //       null;              
    //      }else{
    //         buttonsClickedArr.push(id);
    //         inputsValuesArr.push(value);
    //         isActive = !isActive;
    //      }
           
    //     this.setState({buttonsClickedArr, inputsValuesArr, isActive});
    // }

    // NapraviDugme = () => {
    //     let { targetsArr,targetsArrButtons,isActive } = this.state; // uyima target vrednosti i ubacuje ih u novi niz u koji se posle ubacuju dugmad
    //           targetsArrButtons=targetsArrButtons.slice();
    //    this.setState({gameStart:true});
    //     for (let i in targetsArr) {
    //         let dugme =
    //          <ButtonNumber id={i} value={targetsArr[i]} 
    //             klik={()=>this.handleClick(i,targetsArr[i])} 
    //            />
    //             targetsArrButtons.push(dugme);
    //     }
    //     this.setState({ targetsArrButtons });
    // }

    // changeIsActiv=()=>{
    //   console.log('change')
    // }
  
    // OperandInput = (i) => {
    //     let { inputsValuesArr } = this.state;
    //     inputsValuesArr.push(i);
    //     this.setState({ inputsValuesArr });
    //     console.log(i + ' active')
    // }

    // deleteLastInput=()=>{
    // let { buttonsClickedArr, inputsValuesArr } = this.state;
    //    buttonsClickedArr.pop();
    //    inputsValuesArr.pop();
    //    this.setState({buttonsClickedArr, inputsValuesArr});
    // }

    ButtonClicked=(id, i)=>{                             //// dugme novo kao objekat ... ovde se setuje kada se klikne na njega
          let {buttonsArray,buttonsClicked}=this.state;
            buttonsArray=buttonsArray.slice();
            buttonsClicked=buttonsClicked.slice();           
            buttonsClicked.push(buttonsArray[i]);              
            buttonsArray[i].clicked=!buttonsArray[i].clicked;    ////////ovde se menja da li je kliknuto ili ne
            this.setState({buttonsArray,buttonsClicked});
        }


    render() {
        let {buttonsClicked}=this.state;
        let numberButton=null;  // renderovanje dugmadi za brojeve
             this.state.gameStart ? 
        numberButton=(
            this.state.buttonsArray.map((btn,i)=>{
                console.log(btn +i)
                return (<ButtonNumber value={btn.value} 
                    id={i} 
                    isActive={btn.clicked}
                    clicked={()=>this.ButtonClicked(btn.id, i)}
                    buttonsClicked={buttonsClicked[buttonsClicked.length-1]}/>
                )
            })
           
        ):null;

        return (
            <div>
                <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div>
               
                <Score />
                <div className='button-target'>{this.state.targetNumber}</div>
                <button className='button-functional' onClick={this.generateTarget}>IZABERI BROJEVE</button>
               
                {numberButton}
                <p onClick={this.NapraviDugme}> - NAPRAVI DUGME</p>
                <div>{
                    this.state.targetsArrButtons.map((dugme, i) => {
                        return <span key={i}>{dugme}</span>
                    })
                }</div>

                <div>
                </div>
               
                 <PlayersScreen  buttonsClicked={this.state.buttonsClicked}/>      
            </div>
        );
    }

}
export default BtnNumGroup;