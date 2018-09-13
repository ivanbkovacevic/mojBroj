import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';


class PlayersScreen extends Component {

    render() {
        let message=null;
        let klasa=this.props.klasaSolution
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
       
            <div className={klasa}> <div className='container--pInput'>{playersInput} = <span>{this.props.solution} </span></div>  
               {message}
        
          </div>
        );
    }
}

export default PlayersScreen;