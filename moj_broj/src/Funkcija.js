import React, { Component } from 'react';

class Funkcija extends Component {

    state = {
        opr: ['+', '-', '*', '/'],
        a: [2, 3, 4, 5, 15,50],
        rez: null,
        target:196
    }

    f = (a, b, opr) => {
        if ('+' === opr) { return a + b; }
        if ('*' === opr) { return a * b; }
        if ('-' === opr) { return a - b; }
        if ('/' === opr) { return a / b; }
    }

    poredjenje = () => {
        let { opr, a, rez } = this.state;
        let r = null;
        for (let i = 1; i < a.length; i++) {
            for (let j = 0; j < opr.length; j++) {

                let r = this.f(this.f(a[i - 1], a[i], opr[j]), a[i], opr[j]);

                rez.push(r);
            }
        }
        this.setState({ rez });
    }

    poredjenje2 = () => {
        let { opr, a, rez,target } = this.state;
        for (let n = 0; n < a.length; n++) {
            for (let m = 0; m < a.length; m++) {
                for (let l = 0; l < a.length; l++) {
                    for (let k = 0; k < a.length; k++) {
                        for (let j = 0; j < a.length; j++) {
                            for (let i = 0; i < a.length; i++) {
                                for (let o = 0; o < opr.length; o++) {
                                   
                                    let r = this.ff(a[i], a[j], opr[o]);
                                  
                                        rez= String(a[i]+opr[o]+a[j])
                                        console.log(rez+'rez-r')
                                    
                                    let rr = this.ff(r, a[k], opr[o]);
                                 
                                        rez= String(a[i]+opr[o]+a[j]+opr[o]+a[k])
                                        console.log(rez+'rez-rr')
                                    
                                    // let rrr = this.ff(rr, a[l], opr[o]);
                                    // if(rrr ===target){
                                    //     rez= String(a[i]+opr[o]+a[j]+opr[o]+a[k]+opr[o]+a[l])
                                    //     console.log(rez)
                                    // }
                                 
                                    // let rrrr = this.ff(rrr, a[m], opr[o]);
                                    // if(rrrr ===target){
                                    //     rez= String(a[i]+opr[o]+a[j]+opr[o]+a[k]+opr[o]+a[l]+opr[o]+a[m])
                                    //     console.log(rez)
                                    // }
                                  
                                    // let rrrrr = this.ff(rrrr, a[n], opr[o]);
                                    // if(rrrrr ===target){
                                    //     rez= String(a[i]+opr[o]+a[j]+opr[o]+a[k]+opr[o]+a[l]+opr[o]+a[m]+opr[o]+a[n])
                                    //     console.log(rez)
                                    // }
                                          
                                }
                            }
                        }
                    }
                }
            }
        }
        this.setState({ rez });
    }


    ff = (a, b, opr) => {
        if ('+' === opr) { return a + b; }
        if ('*' === opr) { return a * b; }
        if ('-' === opr) { return a - b; }
        if ('/' === opr) { return a / b; }
    }

    render() {
        return (
            <div>
                {this.state.rez}
                <button className='button-functional' onClick={this.poredjenje}>test</button>
                <button className='button-functional' onClick={this.poredjenje2}>test2</button>
            </div>
        );
    }

};

export default Funkcija;