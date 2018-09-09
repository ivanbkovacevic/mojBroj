import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';


class PlayersScreen extends Component {

      
      

    render() {
        let message=null;
        let playersInput=this.props.btnClickedArr; 
            playersInput= playersInput.map((input,i)=>{
            return <span key={i}>{input.value}</span>
             })

             if (this.props.message.length >0) {
                 message=(
                  <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <p>
                        {this.props.message}
                    </p>
                </Alert> )
             }
                
        return (
            <div>
            <div className='playersIput'> {playersInput} = <span>{this.props.solution} </span>  
            {message}
            </div>
          </div>
        );
    }
}

export default PlayersScreen;