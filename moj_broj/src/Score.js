import React, { Component } from 'react';
import './css/mojbroj.css';
import { Form,FormGroup, Col, ControlLabel,FormControl,Button,Checkbox,Row,} from 'react-bootstrap';

class Score extends Component {
    state = {
        clock: '',
        player:[ {name:'ivan',password:'ivantest',loss:0,win:0} ]
    }

    render() {
        return (
            <div>
          
                <Row>
                   <Col lg={12}>
                        <div className='semafor'>
                            <span>POBEDE: <button className='button-win'>{this.props.win} </button> </span>
                            <span>     PORAZI  : <button className='button-loss'>{this.props.loss} </button>  </span>
                            <span>     OMAŠENO DOSAD ZA  : <button className='button-missed'>{this.props.missed} </button>  </span>
                        </div>
                   </Col>
                </Row>
               
            </div>
        );
    }

}

export default Score;