import React, { Component } from 'react';
import './MojBroj.css';

class ButtonNumber extends Component {

    render() {
        return (

            <button  onClick={this.props.klik} className={this.props.isActive ? 'button-enabled' : 'button-disabled'}>
           
                {this.props.value}</button>

        );
    }
}

export default ButtonNumber;