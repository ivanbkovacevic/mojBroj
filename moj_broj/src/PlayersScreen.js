import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';


class PlayersScreen extends Component {

    render() {
        let message=null;
        let klasa=`playersInput ${this.props.klasaSolution}`
        let playersInput=this.props.btnClickedArr; 
            playersInput= playersInput.map((input,i)=>{
            return <span key={i}>{input.value}</span>
             })

             if (this.props.message.length >0) {
                 message=(
                  <Alert bsStyle="info" className='alert' onDismiss={this.handleDismiss}>
                    <p className='message'>
                        {this.props.message}
                    </p>
                </Alert> )
             }
                
        return (
            <div className='container--plyInp'>
            <div className={klasa}> {playersInput} = <span>{this.props.solution} </span>  
               {message}
            </div>
          </div>
        );
    }
}

export default PlayersScreen;