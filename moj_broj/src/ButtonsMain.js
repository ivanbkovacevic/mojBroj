import React, { Component } from 'react';
import './css/mojbroj.css';

class ButtonsMain extends Component {
    
    render() {
        return (
             <button  onClick={this.props.clicked}
               className={this.props.isActive ?   'button-disabled' : 'button-enabled'} disabled={this.props.isActive}>{this.props.value}</button>

        );
    }
}

export default ButtonsMain;