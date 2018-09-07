import React, { Component } from 'react';
import './MojBroj.css';

class ButtonsOperand extends Component {
    
    render() {
        return (
             <button  onClick={this.props.clicked}
               className={this.props.isActive ?   'button-disabled' : 'button-enabled'} disabled={this.props.isActive}>{this.props.value}</button>

        );
    }
}

export default ButtonsOperand;