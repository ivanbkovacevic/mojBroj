import React, { Component } from 'react';
import ButtonsMain from './ButtonsMain';
import ButtonsOperand from './ButtonsOperand';
import ButtonsOperandSpecial from './ButtonsOperandSpecial';

import './MojBroj.css';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

import { Col, Row, Grid } from 'react-bootstrap';


class BtnNumGroup extends Component {
    state = {

        targetNumber: 0,
        clock: { m: 0, s: 0 },

        numbersArray: [],

        operandsArray: [],
        oprSpecArray: [],
        btnClickedArr: [],
        buttonOrder: 0,

        gameStarted: false,
        win: 0,
        loss: 0,
        buttonType: null,
        numbersAlowed: true,
        operandsAlowed: false,
        isDisabled: false,
       // operandDisabled: false,
        zagOtv:0,
        zagZtv:0,
        message: '',
        solution: '',
        klasaSolution:'playersInput'
    }

    generateTarget = () => {  // pravi target brojeve i dugmad kao objekti
        let { numbersArray, numSpecArr, gameStarted, operandsArray, oprSpecArray, message, clock } = this.state;

        if (gameStarted === false) {
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


            numbersArray = numbersArray.slice();
            numbersArray = [target1, target2, target3, target4, target5, target6];
            operandsArray = operandsArray.slice();
            operandsArray = [operand1, operand2, operand3, operand4];
            oprSpecArray = oprSpecArray.slice();
            oprSpecArray = [operand5, operand6];

            gameStarted = true;
            message = '';
            this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, numbersArray, numSpecArr, operandsArray, oprSpecArray, gameStarted, message })

        } else {

            message = 'Morate prvo resetovati celu igru da biste izabrali nove brojeve';
            this.setState({ message });
        }

    }


    ButtonClicked = (id, i, alowed, type) => {
        let { numbersArray, btnClickedArr, buttonOrder, buttonType, numbersAlowed, operandsAlowed, message } = this.state;  //// dugme novo kao objekat ... ovde se setuje kada se klikne na njega
        message='';
        if (numbersAlowed === true) {
            numbersArray = numbersArray.slice();
            buttonOrder += 1;  ////////// redovni destructuring 
            ///////////////////////////////////////////////////////////////////////////////
            numbersArray[i].clicked = !numbersArray[i].clicked;
            numbersArray[i].order = buttonOrder;//menjanje is clicked properties da mi se menjala css classa i dodavanje ordera dugmetu 

            let btnNum = numbersArray.find(btn => btn.id === id); /// find button  na osnovu id dugmeta ...

            let btnNumClicked = { ...btnNum }; // pravljenje kopije objekta

            btnClickedArr.push(btnNumClicked);// ubacivanje u btnClick niz...niz koji ispisuje inpute
            btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });//sortiranje btnClickedArr niza
            numbersAlowed = false;
            operandsAlowed = true;
            this.setState({ numbersArray, btnClickedArr, buttonOrder, operandsAlowed, numbersAlowed, message });

        } else {
            message = 'Ne mogu dva broja za redom';
            this.setState({ message });
        }

    }

    ButtonOperandClicked = (id, i, alowed, type) => {
        let { btnClickedArr, buttonOrder, numbersAlowed, operandsAlowed, operandsArray, message } = this.state;
        message='';
      

        if (operandsAlowed === true) {
            operandsArray = operandsArray.slice();
            buttonOrder += 1;  ////////// redovni destructuring 
            ///////////////////////////////////////////////////////////////////////////////
            operandsArray[i].clicked = !operandsArray[i].clicked;
            operandsArray[i].order = buttonOrder;//menjanje is clicked properties da mi se menjala css classa i dodavanje ordera dugmetu 

            let btnOpr = operandsArray.find(btn => btn.id === id); /// find button  na osnovu id dugmeta ...
            let btnOprClicked = { ...btnOpr }; // pravljenje kopije objekta

            btnClickedArr.push(btnOprClicked);// ubacivanje u btnClick niz...niz koji ispisuje inpute
            if(btnClickedArr[0].type==='operand'){
                message = 'Ne moze operacija da zapocne operatorom';
                this.setState({ message });
            }
            btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });//sortiranje btnClickedArr niza
            numbersAlowed = true;
            operandsAlowed = false;
            this.setState({ operandsArray, btnClickedArr, buttonOrder, operandsAlowed, numbersAlowed, message });
        } else {
            message = 'Ne mogu dva operatora za redom ili operator na početku';
            this.setState({ message });
        }


    }

    ButtonOperandSpecialClicked = (id, k, alowed, type) => {
        let { oprSpecArray, btnClickedArr, buttonOrder,message,zagOtv,zagZtv } = this.state;
        oprSpecArray = oprSpecArray.slice();
        buttonOrder += 1;  ////////// redovni destructuring 
        ///////////////////////////////////////////////////////////////////////////////
        oprSpecArray[k].clicked = !oprSpecArray[k].clicked;
        oprSpecArray[k].order = buttonOrder;//menjanje is clicked properties da mi se menjala css classa i dodavanje ordera dugmetu 

        let btnOprSpec = oprSpecArray.find(btn => btn.id === id); /// find button  na osnovu id dugmeta ...
        let btnOprSpecClicked = { ...btnOprSpec }; // pravljenje kopije objekta

        btnClickedArr.push(btnOprSpecClicked);// ubacivanje u btnClick niz...niz koji ispisuje inpute
        btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });//sortiranje btnClickedArr niza
        this.setState({ oprSpecArray, btnClickedArr, buttonOrder });


        if(btnClickedArr.length >1){   /////////// uslovi vezani za upotrebe zagrada
           
        
            for(let i=1; i<btnClickedArr.length; i++){
           
                if(btnClickedArr[i-1].value==='(' && btnClickedArr[i].value===')'){
                    message='Nepravilna upotreba zagrada';
                    this.setState({message});
                }else if(btnClickedArr[i-1].value===')' && btnClickedArr[i].value==='('){
                    message='Nepravilna upotreba zagrada';
                    this.setState({message});
                }else if(btnClickedArr[i-1].value===')' && btnClickedArr[i].type==='number'){
                    message='Izostao vam je operator izmedju zagrade i broja';
                    this.setState({message});
                }else if(btnClickedArr[i-1].type==='number' && btnClickedArr[i].value==='('){
                    message='Izostao vam je operator izmedju broja i zagrade';
                    this.setState({message});
                    ///////////////////////
                }else if(btnClickedArr[i-1].value==='(' && btnClickedArr[i].type==='operand'){
                    message='Izostao vam je broj izmedju zagrade i operatora';
                    this.setState({message});
                }else if(btnClickedArr[i-1].type==='operand' && btnClickedArr[i].value===')'){
                    message='Izostao vam je broj izmedju operatora i zagrade';
                    this.setState({message});
                } 
            }
           
        }
          

    }


    DeleteButtonsClicked = () => {  // brisanje upisanih dugmadi i vracanje dugmadi u funkciju  // koristi se findIndex sa id da bi se pronaslo dugme
        let { numbersArray, operandsArray, btnClickedArr, buttonOrder, message, numbersAlowed, operandsAlowed,klasaSolution, solution } = this.state;
        btnClickedArr = btnClickedArr.slice();
        numbersArray = numbersArray.slice();
        operandsArray = operandsArray.slice();
        buttonOrder -= 1;

        let buttonLast = btnClickedArr[btnClickedArr.length - 1];
        if (btnClickedArr.length > 0) {
            if (buttonLast.type === 'number') {

                let indexNum = numbersArray.findIndex(x => x.id === buttonLast.id);
                numbersArray[indexNum].clicked = !numbersArray[indexNum].clicked;
                btnClickedArr.pop();
                numbersAlowed = true;
                operandsAlowed = false;
                message='';
                this.setState({ btnClickedArr, numbersArray, buttonOrder, numbersAlowed,message, operandsAlowed });

            } else if (buttonLast.type === 'operand') {
                let indexOpr = operandsArray.findIndex(x => x.id === buttonLast.id);
                operandsArray[indexOpr].clicked = !operandsArray[indexOpr].clicked;
                btnClickedArr.pop();
                numbersAlowed = false;
                operandsAlowed = true;
                message='';
                this.setState({ btnClickedArr, operandsArray, buttonOrder, numbersAlowed,message, operandsAlowed });
            } else {
                btnClickedArr.pop();
                this.setState({ btnClickedArr });
            }
        }

        if (btnClickedArr.length == 0) {
            message = "";
            solution = ''
            buttonOrder = 0;
            numbersAlowed = true;
            operandsAlowed = false;
            klasaSolution='playersInput'
            this.setState({ message, operandsAlowed, numbersAlowed, buttonOrder, solution,klasaSolution });
        }
    }

    Calculate = () => {
        let { btnClickedArr, win, loss, targetNumber, message,klasaSolution } = this.state;

        let solutionString = [];
        let solution = btnClickedArr.map(btn => {
            return solutionString.push(btn.value)
        })
        solution = solutionString.toString();
        solution = solution.replace(/,/g, " ");
        let solutionLch = solution.slice(-1);
        
        
            solutionLch = Number(solutionLch);
            solution = eval(solution);  
            if(solution === targetNumber){
                win++;
                message = 'TACNO RESENJE - CESTITAMO!';
                klasaSolution='correct';
                this.setState({ win, message, solution,klasaSolution });
            }  else {
                solution = eval(solution);
                loss++;
                message = 'RESENJE NIJE TACNO :( ';
                klasaSolution='wrong';
                this.setState({ loss, message, solution,klasaSolution });
            
      }
      

    }
    ResetAll = () => {
        this.setState({
            targetNumber: 0,
            numbersArray: [],
            operandsArray: [],
            oprSpecArray: [],
            btnClickedArr: [],
            buttonOrder: 0,

            gameStarted: false,
            buttonType: null,
            numbersAlowed: true,
            operandsAlowed: false,
            isDisabled: false,
            operandDisabled: false,
            message: '',
            solution: '',
            klasaSolution:'playersInput'
        });
    }

    render() {
        let { solution, win, loss } = this.state;
        let buttonsNum = null;  // renderovanje dugmadi za brojeve

        let buttonsOperand = null;  // renderovanje dugmadi za brojeve
        let buttonsOperandSpecial = null;  // renderovanje dugmadi za brojeve

        buttonsNum = (
            this.state.numbersArray.map((btn, i) => {
                return (<ButtonsMain value={btn.value}
                    id={i}
                    isActive={btn.clicked}
                    isDisabled={this.state.isDisabled}
                    clicked={() => this.ButtonClicked(btn.id, i, btn.alowed, btn.type)}
                />
                )
            })
        )

        buttonsOperand = (
            this.state.operandsArray.map((btn, i) => {
                return (<ButtonsOperand value={btn.value}
                    id={i}
                    isDisabled={this.state.operandDisabled}
                    clicked={() => this.ButtonOperandClicked(btn.id, i, btn.alowed, btn.type)}
                />
                )
            })
        )

        buttonsOperandSpecial = (
            this.state.oprSpecArray.map((btn, k) => {
                return (<ButtonsOperandSpecial value={btn.value}
                    id={k}
                    clicked={() => this.ButtonOperandSpecialClicked(btn.id, k, btn.alowed, btn.type)}

                />
                )
            })

        )

        return (
            <div className='container-fluid'>
                {/* <div className='state'><per>{JSON.stringify(this.state, null, 2)}</per></div> */}
                <Row>
                    <Col lg={0} ></Col>
                    <Col lg={12} >
                        <Score win={win} loss={loss} clock={this.state.clock} />
                    </Col>
                    <Col lg={0}></Col>
                </Row>

                <Row>
                    <Col lg={0}></Col>
                    <Col lg={12}>
                   
                        <div className='button-target'>
                        {/* <p>TRAŽENI BROJ</p> */}
                        {this.state.targetNumber}</div>
                    </Col>
                    <Col lg={0}></Col>
                </Row>

                <Row>
                    <Col lg={0}></Col>
                    <Col lg={12}>
                    <div className='container--btnFunc'>
                   
                        <button className='button-functional--start' onClick={this.generateTarget}>START</button>
                        {/* <button className='button-functional--delete' onClick={this.DeleteButtonsClicked}>OBRIŠI POSLEDNJE</button>
                        <button className='button-functional--eqa' onClick={this.Calculate}> = </button>
                        <button className='button-functional--reset' onClick={this.ResetAll} resetovati={this.ResetAll}>RESETUJ</button> */}
                        <svg className="icon" onClick={this.DeleteButtonsClicked}><use xlinkHref="sprite.svg#icon-cross"></use></svg>
                        <svg className="icon" onClick={this.Calculate}><use xlinkHref="sprite.svg#icon-checkmark"></use></svg>
                        <svg className="icon" onClick={this.ResetAll} resetovati={this.ResetAll}><use xlinkHref="sprite.svg#icon-reload"></use></svg>
                        </div>
                    </Col>
                    <Col lg={0}></Col>

                </Row>

                <Row>
                    <Col lg={0}></Col>
                    <Col lg={12}>
                    <div className='container--btnNum'>{buttonsNum}</div>
                    </Col>
                    <Col lg={0}></Col>
                </Row>
                <Row>
                    <Col lg={0}></Col>
                    <Col lg={12}>
                    <div className='container--btnOpr'> {buttonsOperand} {buttonsOperandSpecial}</div>
                       
                    </Col>
                    <Col lg={0}></Col>
                </Row>

                <Row>
                    <Col lg={0}></Col>
                    <Col lg={12}>
                        <PlayersScreen btnClickedArr={this.state.btnClickedArr}
                            solution={solution}
                            message={this.state.message}
                            klasaSolution={this.state.klasaSolution}
                        />
                    </Col>
                    <Col lg={0}></Col>
                </Row>

            </div>
        );
    }

}
export default BtnNumGroup;