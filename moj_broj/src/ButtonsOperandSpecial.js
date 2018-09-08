import React, { Component } from 'react';

class ButtonsOperandSpecial extends Component {
    render() {
        return (
            <div>
                 <button  onClick={this.props.clicked}
               className={'button-operand'} >{this.props.value}</button>
            </div>
        );
    }
}

export default ButtonsOperandSpecial;