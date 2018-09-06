import React, { Component } from 'react';
import './MojBroj.css';

class ButtonTest extends Component {
    state={
        isActive:true
    }

  

    render() {
        return (
             <button  onClick={this.props.clicked}
             className={this.props.isActive ? 'button-enabled' : 'button-disabled'}>{this.props.value}</button>

        );
    }
}

export default ButtonTest;