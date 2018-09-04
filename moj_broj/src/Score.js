import React, { Component } from 'react';
import './MojBroj.css';

class Score extends Component {

    racun=(a)=>{
        let rac=0;
       
        for(let i=1;i<10;i++){
            for(let j=1;j<10;j++){
                for(let k=1;k<10;k++){
                    for(let l=1;l<10;l++){
                        for(let m=10;m<20;m++){
                          
                                rac=i+j+k+l+m;
                                if(rac==235){
                                    let num1=String(i);
                                    let num2=String(j);
                                    let num3=String(k);
                                    let num4=String(l);
                                    let num5=String(m);
                                  //  let num6=String(n);
                                    let racString=num1+num2+num3+num4+num5;
                                    return racString;
                                
                            }
                        }
                       
                    }
                  
                }
            }
        }
    }
      

    render() {
        return (
            <div>
               
                <div className='uputstvo'>
                    <h5>UPUTSTVO:</h5>
                    <p>Pronadji trazeni broj. U matematicku operaciju mozete iskoristiti samo 
                        jedanput jedan od ponudjenih brojeva. Ne smete izabrati dva broja zaredom.
                     Operacija mora da bude ispravna.</p>
                </div>
                
                <h1>REZULTAT</h1>
                <h3>POBEDE: <button className='button-win'>{this.props.win} </button> </h3>
                <h3>PORAZI  : <button className='button-loss'>{this.props.loss} </button>  </h3>
                <h5>{this.props.message}</h5>
              
                <div id="time">00:00</div>
                <div className='spinOuther'><div className='spin'>4</div></div>
                <div className='spinOuther'><div className='spinR'>5</div></div>
                {this.props.value}
           {this.racun(5)}
            </div>
        );
    }
   
}

export default Score;