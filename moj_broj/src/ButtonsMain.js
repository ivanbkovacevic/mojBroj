import React, { Component } from 'react';
import './MojBroj.css';

class ButtonTest extends Component {
    
    render() {
        return (
             <button  onClick={this.props.clicked}
               className={this.props.isActive ?   'button-disabled' : 'button-enabled'}>{this.props.value}</button>

        );
    }
}

export default ButtonTest;