import React, { Component } from 'react';
import ButtonsMain from './ButtonsMain';
import ButtonsOperand from './ButtonsOperand';
import ButtonsOperandSpecial from './ButtonsOperandSpecial';

import './css/mojbroj.css';
import Score from './Score';
import PlayersScreen from './PlayersScreen';

import { Col, Row } from 'react-bootstrap';

class Main extends Component {
    state = {
        targetNumber: 0,
        numbersArray: [],
        operandsArray: [],
        oprSpecArray: [],
        btnClickedArr: [],
        buttonOrder: 0,
        gameStarted: false,
        win: 0,
        loss: 0,
        missed: 0,
        buttonType: null,
        numbersAlowed: true,
        operandsAlowed: false,
        isDisabled: false,
        zagOtv: 0,
        zagZtv: 0,
        message: '',
        solution: '',
        klasaSolution: '',
        klasaApp: 'container--disapear',
        calculateMissed:null
    }

    generateTarget = () => {
        // method that makes numbers and buttons like objects
        let { numbersArray, numSpecArr, gameStarted, operandsArray, oprSpecArray, message, klasaApp } = this.state;

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
            klasaApp = 'container--apear'
            message = '';
            this.setState({ targetNumber, target1, target2, target3, target4, target5, target6, numbersArray, numSpecArr, operandsArray, oprSpecArray, gameStarted, message, klasaApp })

        } else {
            message = 'Morate prvo resetovati celu igru da biste izabrali nove brojeve';
            this.setState({ message });
        }

    }


    ButtonClicked = (id, i) => {
        //method for onClick event on number buttons. Here we collect data and procces form further use
        let { numbersArray, btnClickedArr, buttonOrder, numbersAlowed, operandsAlowed, message } = this.state;

        message = '';
        if (numbersAlowed === true) {
            numbersArray = numbersArray.slice();
            buttonOrder += 1;
            //////////  making a copy of array 

            numbersArray[i].order = buttonOrder;
            //here we change click property of button and order so we can use it for css 
            numbersArray[i].clicked = !numbersArray[i].clicked;
            /// here we find button  based on id
            let btnNum = numbersArray.find(btn => btn.id === id);
            // copying button object
            let btnNumClicked = { ...btnNum };
            // pushing buttons in array for displaying 
            btnClickedArr.push(btnNumClicked);
            //sorting btnClickedArr 
            btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });
            numbersAlowed = false;
            operandsAlowed = true;
            this.setState({ numbersArray, btnClickedArr, buttonOrder, operandsAlowed, numbersAlowed, message });

        } else {
            message = 'Ne mogu dva broja za redom';
            this.setState({ message });
        }

    }

    ButtonOperandClicked = (id, i) => {
        let { btnClickedArr, buttonOrder, numbersAlowed, operandsAlowed, operandsArray, message } = this.state;
        message = '';

        if (operandsAlowed === true) {
            //////////  making a copy of array 
            operandsArray = operandsArray.slice();
            buttonOrder += 1;
            //here we change click property of button and order so we can use it for css 
            operandsArray[i].clicked = !operandsArray[i].clicked;
            operandsArray[i].order = buttonOrder;
            /// here we find button  based on id
            let btnOpr = operandsArray.find(btn => btn.id === id);
            // copying button object
            let btnOprClicked = { ...btnOpr };
            // pushing buttons in array for displaying 
            btnClickedArr.push(btnOprClicked);
            if (btnClickedArr[0].type === 'operand') {
                message = 'Ne moze operacija da zapocne operatorom';
                this.setState({ message });
            }
            //sorting btnClickedArr 
            btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });
            numbersAlowed = true;
            operandsAlowed = false;
            this.setState({ operandsArray, btnClickedArr, buttonOrder, operandsAlowed, numbersAlowed, message });
        } else {
            message = 'Ne mogu dva operatora za redom ili operator na početku';
            this.setState({ message });
        }
    }

    ButtonOperandSpecialClicked = (id, k, alowed, type) => {
        let { oprSpecArray, btnClickedArr, buttonOrder, message } = this.state;
        //////////  making a copy of array 
        oprSpecArray = oprSpecArray.slice();
        buttonOrder += 1;
        //here we change click property of button and order so we can use it for css 
        oprSpecArray[k].clicked = !oprSpecArray[k].clicked;
        oprSpecArray[k].order = buttonOrder;
        /// here we find button  based on id
        let btnOprSpec = oprSpecArray.find(btn => btn.id === id);
        // copying button object
        let btnOprSpecClicked = { ...btnOprSpec };
        // pushing buttons in array for displaying 
        btnClickedArr.push(btnOprSpecClicked);
        //sorting btnClickedArr 
        btnClickedArr = btnClickedArr.sort((obj1, obj2) => { return obj1.order - obj2.order });
        this.setState({ oprSpecArray, btnClickedArr, buttonOrder });

        // conditions for aprentices use   
        if (btnClickedArr.length > 1) {
            for (let i = 1; i < btnClickedArr.length; i++) {
                if (btnClickedArr[i - 1].value === '(' && btnClickedArr[i].value === ')') {
                    message = 'Nepravilna upotreba zagrada';
                    this.setState({ message });
                } else if (btnClickedArr[i - 1].value === ')' && btnClickedArr[i].value === '(') {
                    message = 'Nepravilna upotreba zagrada';
                    this.setState({ message });
                } else if (btnClickedArr[i - 1].value === ')' && btnClickedArr[i].type === 'number') {
                    message = 'Izostao vam je operator izmedju zagrade i broja';
                    this.setState({ message });
                } else if (btnClickedArr[i - 1].type === 'number' && btnClickedArr[i].value === '(') {
                    message = 'Izostao vam je operator izmedju broja i zagrade';
                    this.setState({ message });

                } else if (btnClickedArr[i - 1].value === '(' && btnClickedArr[i].type === 'operand') {
                    message = 'Izostao vam je broj izmedju zagrade i operatora';
                    this.setState({ message });
                } else if (btnClickedArr[i - 1].type === 'operand' && btnClickedArr[i].value === ')') {
                    message = 'Izostao vam je broj izmedju operatora i zagrade';
                    this.setState({ message });
                }
            }

        }
    }
    // deleting buttons and enabling buttons for use . We find buttons by id 
    DeleteButtonsClicked = () => {
        let { numbersArray, operandsArray, btnClickedArr, buttonOrder, message, numbersAlowed, operandsAlowed,
            klasaSolution, solution } = this.state;
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
                message = '';
                this.setState({ btnClickedArr, numbersArray, buttonOrder, numbersAlowed, message, operandsAlowed });

            } else if (buttonLast.type === 'operand') {
                let indexOpr = operandsArray.findIndex(x => x.id === buttonLast.id);
                operandsArray[indexOpr].clicked = !operandsArray[indexOpr].clicked;
                btnClickedArr.pop();
                numbersAlowed = false;
                operandsAlowed = true;
                message = '';
                this.setState({ btnClickedArr, operandsArray, buttonOrder, numbersAlowed, message, operandsAlowed });
            } else {
                btnClickedArr.pop();
                this.setState({ btnClickedArr });
            }
        }

        if (btnClickedArr.length === 0) {
            message = "";
            solution = ''
            buttonOrder = 0;
            numbersAlowed = true;
            operandsAlowed = false;
            klasaSolution = ''
            this.setState({ message, operandsAlowed, numbersAlowed, buttonOrder, solution, klasaSolution });
        }
    }
    //we are calculating the score
    Calculate = () => {
        let { btnClickedArr, win, loss, targetNumber, message, klasaSolution, missed,calculateMissed } = this.state;
        let solutionString = [];
        let solution = btnClickedArr.map(btn => {
            return solutionString.push(btn.value)
        })

        solution = solutionString.toString();
        solution = solution.replace(/,/g, " ");
        let solutionLch = solution.slice(-1);

        if (solution.length !== 0) {
            if (solutionLch === '+' || solutionLch === '-' || solutionLch === '*' || solutionLch === '/') {
                message = 'Operacija je neispravna';
                calculateMissed=false;
                this.setState({ message,calculateMissed });
            } else {

                solution = eval(solution);
                if (solution === targetNumber) {
                    win++;
                    message = 'TACNO RESENJE - CESTITAMO!';
                    klasaSolution = 'correct';
                    this.setState({ win, message, solution, klasaSolution });
                } else {
                    solution = eval(solution);
                    solution = solution.toFixed(0);
                    loss++;
                    message = 'RESENJE NIJE TACNO :( ';
                    klasaSolution = 'wrong';
                    calculateMissed=true;
                    this.setState({ loss, message, solution, klasaSolution,calculateMissed });
                }
            }
                //checking if operation is valid so can add missed points
               if(calculateMissed){
                let missedCurrent = Math.abs(targetNumber - solution);
                missed = missed + missedCurrent;
                this.setState({ missed });
                  }
           
        }
    }

    //reseting all to starting state
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
            klasaSolution: '',
            klasaApp: 'container--disapear'
        });

    }

    render() {
        let { solution, win, loss, missed, klasaApp } = this.state;
        let buttonsNum = null;
        let buttonsOperand = null;
        let buttonsOperandSpecial = null;

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
            <Row>
                <Col lg={3} md={3} sm={2} xs={0}></Col>
                <Col lg={6} md={6} sm={8} xs={12}>

                    <div className='container'>
                        <Score win={win} loss={loss} missed={missed} clock={this.state.clock} />
                        <div className='button-target'>{this.state.targetNumber}</div>
                    </div>
                    <div className='container--btnFunc'>
                        <button className='button-functional--start' onClick={this.generateTarget}>START</button>

                        <div className='container--icons'>
                            <div className='container--icon'><svg className="icon-back" onClick={this.DeleteButtonsClicked}><use xlinkHref="sprite.svg#icon-backspace"></use></svg></div>
                            <div className='container--icon'> <svg className="icon-confirm" onClick={this.Calculate}><use xlinkHref="sprite.svg#icon-checkmark"></use></svg></div>
                            <div className='container--icon'><svg className="icon-reset" onClick={this.ResetAll} resetovati={this.ResetAll}><use xlinkHref="sprite.svg#icon-reload"></use></svg></div>
                        </div>
                    </div>
                    <div className='container-razmak'></div>
                    <div className={klasaApp}>
                        <div className='container--btnNum'>{buttonsNum}</div>
                        <div className='container--btnOpr'>{buttonsOperand}{buttonsOperandSpecial}</div>
                        <PlayersScreen btnClickedArr={this.state.btnClickedArr}
                            solution={solution}
                            message={this.state.message}
                            klasaSolution={this.state.klasaSolution}
                        />
                    </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={0}></Col>
            </Row>

        );
    }

}
export default Main;