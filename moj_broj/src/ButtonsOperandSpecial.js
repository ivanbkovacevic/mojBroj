import React, { Component } from 'react';

class ButtonsOperandSpecial extends Component {
    render() {
        return (
            <button onClick={this.props.clicked}
                className={'button-operand'} >{this.props.value}
            </button>

        );
    }
}

export default ButtonsOperandSpecial;