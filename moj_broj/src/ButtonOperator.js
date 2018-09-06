import React, { Component } from 'react';
import './MojBroj.css';

class ButtonNumber extends Component {
    state={
        isActive:true
    }

    render() {
        return (
             <button  onClick={this.props.clicked} 
             className='button-functional'>{this.props.value}</button>

        );
    }
}

export default ButtonNumber;