import React, { Component } from 'react';
import ButtonsMain from './ButtonsMain';
import ButtonsOperand from './ButtonsOperand';
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
        buttonsOperand:[],
        buttonsClicked:[],
        buttonOrder:0,

        gameStart:false,
        buttonType:null,
        numbersAlowed:true,
        operandsAlowed:true,
        isDisabled:false,
        message:''
    }

    generateTarget = () => {  // pravi target brojeve i dugmad kao objekti
        let min = 1;
        let max = 9;
        let min1 = 100;
        let max1 = 900;
        let operand1 = {id:6, value:'+', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};
        let operand2 = {id:7, value:'-', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};
        let operand3 = {id:8, value:'*', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};
        let operand4 = {id:9, value:'/', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};
        let operand5 = {id:10, value:'(', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};
        let operand6 = {id:11, value:')', clicked:false, order:0,alowed: true, type:'operand', class:'button-operand'};

        let target1 = {id:0, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false, order:0,alowed: true, type:'number'}
        let target2 = {id:1, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false, order:0,alowed: true, type:'number'}
        let target3 = {id:2, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false, order:0,alowed: true, type:'number'}
        let target4 = {id:3, value:Math.floor(Math.random() * (max - min + 1)) + min, clicked:false, order:0,alowed: true, type:'number'}
        let target5 = [10, 15, 20, 10, 15, 20, 10, 15, 20, 10];
        let index = Math.floor(Math.random() * 10);
        target5 = {id:4, value:target5[index], clicked:false, order:0,alowed:true, type:'number'}
        let target6 = [25, 50, 75, 100, 25, 50, 75, 100, 25, 50];
        let index1 = Math.floor(Math.random() * 10);
        target6 = {id:5, value:target6[index1], clicked:false, order:0,alowed:true, type:'number'}

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

   
    ButtonClicked=(id, i,alowed, type)=>{  
        let {buttonsArray,buttonsClicked, buttonOrder,buttonType,numbersAlowed, operandsAlowed,message}=this.state;  //// dugme novo kao objekat ... ovde se setuje kada se klikne na njega
        
        if(    operandsAlowed === alowed && numbersAlowed === alowed  ){
           
                buttonsArray=buttonsArray.slice();
                buttonOrder++;
                  
                buttonsArray[i].order=buttonOrder;
                buttonsArray[i].clicked=!buttonsArray[i].clicked;  
                buttonsClicked.push(buttonsArray[i]);
                buttonsClicked=buttonsClicked.sort((obj1,obj2)=>{return obj1.order - obj2.order});

                type === 'number' ? numbersAlowed=false :  operandsAlowed=false;
               
                this.setState({buttonsArray,buttonsClicked,buttonOrder, operandsAlowed,numbersAlowed,message});
  
        }else if(  operandsAlowed === alowed && type === 'operand' ) {

            buttonsArray=buttonsArray.slice();
            buttonOrder++;
              
            buttonsArray[i].order=buttonOrder;
            buttonsArray[i].clicked=!buttonsArray[i].clicked;  
            buttonsClicked.push(buttonsArray[i]);
            buttonsClicked=buttonsClicked.sort((obj1,obj2)=>{return obj1.order - obj2.order});
            operandsAlowed=false;
            numbersAlowed=true;
           
            message='';
        
            this.setState({buttonsArray,buttonsClicked,buttonOrder, operandsAlowed,numbersAlowed,message});
           
        }else if(numbersAlowed === alowed && type === 'number'){
            buttonsArray=buttonsArray.slice();
            buttonOrder++;
              
            buttonsArray[i].order=buttonOrder;
            buttonsArray[i].clicked=!buttonsArray[i].clicked;  
            buttonsClicked.push(buttonsArray[i]);
            buttonsClicked=buttonsClicked.sort((obj1,obj2)=>{return obj1.order - obj2.order});
            operandsAlowed=true;
            numbersAlowed=false;
            message='';
        
            this.setState({buttonsArray,buttonsClicked,buttonOrder, operandsAlowed,numbersAlowed,message});
        }else{
            message='Ne mogu dva broja ili operatora za redom';
            this.setState({message});
        }
           
 
        }

        DeleteButtonsClicked=()=>{  // brisanje upisanih dugmadi i vracanje dugmadi u funkciju  // koristi se order i filter funkcija da se pronnadje dugme
            let {buttonsArray,buttonsClicked, buttonOrder,message,numbersAlowed,operandsAlowed}=this.state;
               buttonsClicked=buttonsClicked.slice();
               buttonsArray=buttonsArray.slice();
            let buttonLast= buttonsClicked.filter(function(buttonsClicked) {
                return buttonsClicked.order == buttonOrder;
              });
              
              if(buttonLast.length !== 0){
                let btnid= buttonLast[0].id;
                buttonOrder--
              
                buttonsArray[btnid].clicked=!buttonsArray[btnid].clicked;
                buttonsClicked.pop();
                numbersAlowed === false ?  numbersAlowed === true : numbersAlowed === false;
                operandsAlowed === false ?  operandsAlowed === true : operandsAlowed === false;


                this.setState({buttonsClicked,buttonsArray,buttonOrder,numbersAlowed,operandsAlowed});
              }else{
                  message = 'Sve ste obrisali';
                  numbersAlowed=true;
                  operandsAlowed=true;
                  this.setState({message,numbersAlowed,operandsAlowed});
              }
              
        }

    render() {
        let {buttonsClicked}=this.state;
        let buttonsMain=null;  // renderovanje dugmadi za brojeve
        let buttonsOperand=null;  // renderovanje dugmadi za brojeve
       
             if(this.state.gameStart){

                buttonsMain=(
                    this.state.buttonsArray.map((btn,i)=>{
                        return (<ButtonsMain value={btn.value} 
                            id={i} 
                            isActive={btn.clicked}
                            isDisabled={this.state.isDisabled}
                            clicked={()=>this.ButtonClicked(btn.id,i,btn.alowed, btn.type)}
                            buttonsClicked={buttonsClicked}/>
                        )
                    })
                )

                buttonsOperand=(
                    this.state.buttonsOperandArray.map((btn,i)=>{
                        return (<ButtonsOperand value={btn.value} 
                            id={i} 
                            isActive={btn.clicked}
                            isDisabled={this.state.isDisabled}
                            clicked={()=>this.ButtonClicked(btn.id,i,btn.alowed, btn.type)}
                            buttonsClicked={buttonsClicked}/>
                        )
                    })
                   
                )
             }  

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
                <div>
                </div>
                 <PlayersScreen  buttonsClicked={this.state.buttonsClicked}/>      
            </div>
        );
    }

}
export default BtnNumGroup;