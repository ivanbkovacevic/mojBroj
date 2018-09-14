import React, { Component } from 'react';
import './css/mojbroj.css';
import { Form,FormGroup, Col, ControlLabel,FormControl,Button,Checkbox,Row,} from 'react-bootstrap';
import Funkcija from './Funkcija';

class Score extends Component {
    state = {
        clock: '',
        player:[ {name:'ivan',password:'ivantest',loss:0,win:0} ]
    }

    render() {
        return (
            <div>
                 <Funkcija />
                <div className='uputstvo'>
                    <h3>UPUTSTVO:</h3>
                    <p>Pronađite traženi broj postavkom datih brojeva u matematičku jednačinu. Možete iskoristiti svaki od ponuđenih brojeva samo jedanput.
                    Ne smete postaviti dva broja zaredom bez znaka operacije između njih. Operacija mora biti matematički ispravna.</p>
                </div>
                <div>
                    {/* <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                       </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form> */}
                </div>
                <Row>
                   <Col lg={12}>
                        <div className='semafor'>
                            <span>POBEDE: <button className='button-win'>{this.props.win} </button> </span>
                            <span>     PORAZI  : <button className='button-loss'>{this.props.loss} </button>  </span>
                            <span>     OMAŠENO DOSAD ZA  : <button className='button-missed'>{this.props.missed} </button>  </span>
                            {/* <div id="time">{this.state.clock}</div>
                            <button onClick={this.reset}>reset timer</button> */}
                        </div>
                   </Col>
                </Row>
               
            </div>
        );
    }

}

export default Score;