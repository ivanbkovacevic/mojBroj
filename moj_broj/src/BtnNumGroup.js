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
        buttonsClickedArr.push(id)
        inputsValuesArr.push(value)
        isActive = !isActive;
       

        for (var i in buttonsClickedArr) {
            console.log('jedi govna'+i)
            if (id == buttonsClickedArr[i]) {
                    return buttonsClickedArr.pop(id)
                    console.log('pusi kurac')
                    this.setState({ buttonsClickedArr, inputsValuesArr, isActive });
                } 
            // if (id !== buttonsClickedArr[i]) {
            //     buttonsClickedArr.pop(id)
            //     console.log('pusi kurac')
            //     this.setState({ buttonsClickedArr, inputsValuesArr, isActive });
            // } else {
            //     buttonsClickedArr.push(id);
            //     this.setState({ buttonsClickedArr, inputsValuesArr, isActive });

            // }

        }
       

        console.log('TEST RODITEL ' + id + ' ' + value + ' ' + isActive + ' ' + buttonsClickedArr);
        console.log(buttonsClickedArr + ' clicked arr')
        console.log(inputsValuesArr + ' Values arr')
        console.log(id)
    }

    NapraviDugme = () => {
        let { targetsArr } = this.state;
        for (let i in targetsArr) {
            let dugme = <ButtonNumber id={i} value={targetsArr[i]} klasa={this.state.isActive}
                klik={() => this.handleClick(i, targetsArr[i])} />
            targetsArr.push(dugme);
        }
        this.setState({ targetsArr });
    }

    izracunaj=(a,b)=>{
        let racun=a+b;
    return racun;
    }

    racun=(a,b)=>{
        let racun=a+b;
        return racun;  
    }
  
    OperandInput = (i) => {
        let { inputsValuesArr } = this.state;
        inputsValuesArr.push(i);

        this.setState({ inputsValuesArr });
        console.log(i + ' active')
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
            {this.izracunaj(this.racun(2,this.racun(2,2)),2)}
            </div>
        );
    }
}

export default BtnNumGroup;