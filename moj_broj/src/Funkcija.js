import React from 'react';

const Funkcija = () => {

    let opr = ['+', '*', '/', '-'];
    let a = [2,3,4,5];

    function evaluate(a,opr) {
        function f(a, b, opr) {
            if ('+' === opr) { return a + b; }
            if ('*' === opr) { return a * b; }
            if ('-' === opr) { return a - b; }
            if ('/' === opr) { return a / b; }
        }

        let r=1;

            for(let i=1; i< a.length; i++){
                    r = f(r,a[i],opr[i-1]);
                }
                return r;
    };

    let rez = evaluate(2,'+');

    // test=()=>{

    // }

    return (
        <div>
            {rez}
            <button className='button-functional' onClick={this.test}>test</button>
        </div>
    );
};

export default Funkcija;