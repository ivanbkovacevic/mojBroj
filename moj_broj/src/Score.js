import React, { Component } from 'react';
import './MojBroj.css';
import Funkcija from './Funkcija';


class Score extends Component {
    state = {
        clock: ''
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //       let {clock}=  this.state;
    //       clock.s++;
    //       if(clock.s===60){
    //        clock.m++;
    //        clock.s=0;
    //       }

    //         this.setState({clock});
    //       console.log(this.state.clock)
    //     }, 1000);
    //   }

    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }



    render() {


        return (
            <div>
                {/* //  <Funkcija /> */}
                <div className='uputstvo'>
                    <h5>UPUTSTVO:</h5>
                    <p>Pronadji trazeni broj. U matematicku operaciju mozete iskoristiti samo
                        jedanput jedan od ponudjenih brojeva. Ne smete izabrati dva broja zaredom.
                     Operacija mora da bude matematicki ispravna.</p>
                </div>
                <div className='semafor'>
                    <h2>REZULTAT</h2>
                    <span>POBEDE: <button className='button-win'>{this.props.win} </button> </span>
                    <span>     PORAZI  : <button className='button-loss'>{this.props.loss} </button>  </span>
                    <span>{this.props.message}</span>

                    <div id="time">{this.state.clock}</div>
                    <button onClick={this.reset}>reset timer</button>
                </div>
            </div>
        );
    }

}

export default Score;