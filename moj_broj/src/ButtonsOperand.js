import React, { Component } from 'react';
import './css/mojbroj.css';

class ButtonsOperand extends Component {
    
    render() {
        return (
             <button  onClick={this.props.clicked}
               className={'button-operand'} disabled={this.props.isActive}>{this.props.value}</button>

        );
    }
}

export default ButtonsOperand;