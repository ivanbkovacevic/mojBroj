import React from 'react';

const Funkcija = () => {

    let rez;
 function r(a,b){
     return a+b;
 }

 for(let j=1;j<5;j++){
    for(let i=1;i<5;i++){
        rez= r(r(i,j),i)
        }
}
  

    return (
        <div>
            {rez}
        </div>
    );
};

export default Funkcija;