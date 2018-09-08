import React, { Component } from 'react';
import ButtonsMain from './ButtonsMain';
import ButtonsOperand from './ButtonsOperand';
import ButtonsOperandSpecial from './ButtonsOperandSpecial';
import './MojBroj.css';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

class BtnNumGroup extends Component {
    state = {
    
        targetNumber: 0,
       

        ////////////////////////////////
        buttonsArray: [],
        buttonsOperandArray: [],
        buttonsOperandSpecialArray:[],
        buttonsClicked: [],
        buttonOrder: 0,

        gameStarted: false,
        buttonType: null,
        numbersAlowed: true,
        operandsAlowed: true,
        isDisabled: false,
        operandDisabled:false,
        message: ''
    }

    generateTarget = () => {  // pravi target brojeve i dugmad kao objekti
        let { buttonsArray, gameStarted, buttonsOperandArray,buttonsOperandSpecialArray,message } = this.state;
      
      if(gameStarted=== false){
        let min = 1;
        let max = 9;
        let min1 = 100;
        let max1 = 900;
        let operand1 = { id: 0, value: '+', clicked: false, order: 0, alowed: true, type: 'operand', class: 'button-operand' };
        let operand2 = { id: 1, value: '-', clicked: false, order: 0, alowed: true, type: 'operand', class: 'button-operand' };
        let operand3 = { id: 2, value: '*', clicked: false, order: 0, alowed: true, type: 'operand', class: 'button-operand' };
        let operand4 = { id: 3, value: '/', clicked: false, order: 0, alowed: true, type: 'operand', class: 'button-operand' };

        let operand5 = { id: 0, value: '(', clicked: false, order: 0, alowed: true, type: 'special', class: 'button-operand' };
        let operand6 = { id: 1, value: ')', clicked: false, order: 0, alowed: true, type: 'special', class: 'button-operand' };

        let target1 = { id: 0, value: Math.floor(Math.random() * (max - min + 1)) + min, clicked: false, order: 0, alowed: true, type: 'number' }
        let target2 = { id: 1, value: Math.floor(Math.random() * (max - min + 1)) + min, clicked: false, order: 0, alowed: true, type: 'number' }
        let target3 = { id: 2, value: Math.floor(Math.random() * (max - min + 1)) + min, clicked: false, order: 0, alowed: true, type: 'number' }
        let target4 = { id: 3, value: Math.floor(Math.random() * (max - min + 1)) + min, clicked: false, order: 0, alowed: true, type: 'number' }
        let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
        let index = Math.floor(Math.random() * 10);
        target5 = { id: 4, value: target5[index], clicked: false, order: 0, alowed: true, type: 'number' }
        let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
        let index1 = Math.floor(Math.random() * 10);
        target6 = { id: 5, value: target6[index1], clicked: false, order: 0, alowed: true, type: 'number' }
        let targetNumber = Math.floor(Math.random() * (max1 - min1 + 1) + min1); 

        buttonsArray = buttonsArray.slice();
        buttonsArray = [target1, target2, target3, target4, target5, target6];
        buttonsOperandArray = buttonsOperandArray.slice();

        buttonsOperandArray = [operand1, operand2, operand3, operand4];

        buttonsOperandSpecialArray=buttonsOperandSpecialArray.slice();
        buttonsOperandSpecialArray=[operand5, operand6];
        gameStarted=true;

        this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, buttonsArray, buttonsOperandArray, buttonsOperandSpecialArray,gameStarted })
        
      }else{

            message='Morate prvo resetovati celu igru da biste izabrali nove brojeve';
            this.setState({message});
      }
       
  
        
    }

    ButtonClicked = (id, i, alowed, type) => {
        let { buttonsArray, buttonsClicked, buttonOrder, buttonType, numbersAlowed, operandsAlowed, message } = this.state;  //// dugme novo kao objekat ... ovde se setuje kada se klikne na njega
        if(numbersAlowed===true){
        buttonsArray = buttonsArray.slice();
        buttonOrder+=1;
        buttonsArray[i].order = buttonOrder;
        buttonsArray[i].clicked = !buttonsArray[i].clicked;
        buttonsClicked.push(buttonsArray[i]);
        buttonsClicked = buttonsClicked.sort((obj1, obj2) => { return obj1.order - obj2.order });
        numbersAlowed = false;
        operandsAlowed = true;
        this.setState({ buttonsArray, buttonsClicked, buttonOrder, operandsAlowed, numbersAlowed, message });
        
       }else{
        message = 'Ne mogu dva broja za redom';
        this.setState({ message });
       }
    
    }

    ButtonOperandClicked = (id, i, alowed, type) => {
        let { buttonsOperandArray, buttonsClicked, buttonOrder, buttonType, numbersAlowed, operandsAlowed, message } = this.state;
        if(buttonsClicked.length === 0){
           null;
        }else{
            if(operandsAlowed===true){
                buttonsOperandArray = buttonsOperandArray.slice();
                buttonOrder+=1;
                let btnOprClickedArr=buttonsOperandArray.filter(function(btn) {
                    return btn.id===id;
                })
               let btnOprClicked=btnOprClickedArr[0];
             //   btnOprClicked.clicked = !btnOprClicked.clicked;
                buttonsClicked.push( btnOprClicked);
                buttonsClicked = buttonsClicked.sort((obj1, obj2) => { return obj1.order - obj2.order });
                numbersAlowed = true
                operandsAlowed = false;
             
                this.setState({ buttonsOperandArray, buttonsClicked, buttonOrder, operandsAlowed, numbersAlowed, message });
                   }else{
                    message = 'Ne mogu dva operatora za redom';
                    this.setState({ message });
                   } 
        } 
       
    }

    ButtonOperandSpecialClicked = (id, k, alowed, type) => {
        let { buttonsOperandSpecialArray, buttonsClicked, buttonOrder  } = this.state;
        buttonsOperandSpecialArray = buttonsOperandSpecialArray.slice();
        buttonOrder++;
        buttonsOperandSpecialArray[k].order = buttonOrder;
        buttonsOperandSpecialArray[k].clicked = !buttonsOperandSpecialArray[k].clicked;
        buttonsClicked.push(buttonsOperandSpecialArray[k]);
        buttonsClicked = buttonsClicked.sort((obj1, obj2) => { return obj1.order - obj2.order });
        this.setState({ buttonsOperandSpecialArray, buttonsClicked, buttonOrder });
    }


    DeleteButtonsClicked = () => {  // brisanje upisanih dugmadi i vracanje dugmadi u funkciju  // koristi se order i filter funkcija da se pronnadje dugme
        let { buttonsArray, buttonsOperandArray, buttonsClicked, buttonOrder, message, numbersAlowed, operandsAlowed } = this.state;
        buttonsClicked = buttonsClicked.slice();
        buttonsArray = buttonsArray.slice();
        buttonsOperandArray=buttonsOperandArray.slice();
        buttonOrder-=1;

        let buttonLast = buttonsClicked[buttonsClicked.length-1];
           if(buttonsClicked.length >0){
            if(buttonLast.type==='number'){
                let indexNum= buttonsArray.indexOf(buttonLast);
                buttonsArray[indexNum].clicked = !buttonsArray[indexNum].clicked;
                buttonsClicked.pop();
                numbersAlowed = true;
                operandsAlowed = false;
              this.setState({ buttonsClicked, buttonsArray, buttonOrder, numbersAlowed, operandsAlowed });
  
             }else if(buttonLast.type==='operand'){
              let indexNumOpr= buttonsOperandArray.indexOf(buttonLast);
              buttonsOperandArray[indexNumOpr].clicked = !buttonsOperandArray[indexNumOpr].clicked;
              buttonsClicked.pop();
              numbersAlowed = false;
              operandsAlowed = true;
               this.setState({ buttonsClicked, buttonsOperandArray, buttonOrder, numbersAlowed, operandsAlowed });
             }else{
                buttonsClicked.pop();
                 this.setState({ buttonsClicked});
             }
           }
           
           if(buttonsClicked.length ==0){
            message="Sve ste obrisali";
            buttonOrder=0;
            numbersAlowed = true;
            operandsAlowed = true;
            this.setState({message,operandsAlowed,numbersAlowed,buttonOrder});
           }
    }

    render() {
        let { buttonsClicked } = this.state;
        let buttonsMain = null;  // renderovanje dugmadi za brojeve
        let buttonsOperand = null;  // renderovanje dugmadi za brojeve
        let buttonsOperandSpecial = null;  // renderovanje dugmadi za brojeve

      

            buttonsMain = (
                this.state.buttonsArray.map((btn, i) => {
                    return (<ButtonsMain value={btn.value}
                        id={i}
                        isActive={btn.clicked}
                        isDisabled={this.state.isDisabled}
                        clicked={() => this.ButtonClicked(btn.id, i, btn.alowed, btn.type)}
                      //  buttonsClicked={buttonsClicked} 
                        />
                    )
                })
            )

            buttonsOperand = (
                this.state.buttonsOperandArray.map((btn, i) => {
                    return (<ButtonsOperand value={btn.value}
                        id={i}
                       // isActive={btn.clicked}
                        isDisabled={this.state.operandDisabled}
                        clicked={() => this.ButtonOperandClicked(btn.id, i, btn.alowed, btn.type)}
                      //  buttonsClicked={buttonsClicked}
                         />
                    )
                })

            )

            buttonsOperandSpecial = (
                this.state.buttonsOperandSpecialArray.map((btn, k) => {
                    return (<ButtonsOperandSpecial value={btn.value}
                        id={k}   
                        clicked={() => this.ButtonOperandSpecialClicked(btn.id, k, btn.alowed, btn.type)}
                       // buttonsClicked={buttonsClicked}
                         />
                    )
            })

            )
        

        return (
            <div>
                <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div>

                <Score />
                <div className='button-target'>{this.state.targetNumber}</div>
                <div>
                    {this.state.message}
                </div>

                <button className='button-functional' onClick={this.generateTarget}>IZABERI BROJEVE</button>
                <button className='button-functional' onClick={this.DeleteButtonsClicked}>DELETE</button>
                {buttonsMain}
                {buttonsOperand}
                {buttonsOperandSpecial}
                <div>
                </div>
                <PlayersScreen click={()=>this.ResetAll()}
                buttonsClicked={this.state.buttonsClicked} />
            </div>
        );
    }

}
export default BtnNumGroup;