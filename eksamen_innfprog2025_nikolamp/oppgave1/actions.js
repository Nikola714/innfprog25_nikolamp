import { ansatt } from './register.js';


//Første funskjon til å indexere og skrive ut informasjon om hvert ansatt
function ansatteIndex(){
    // const index = ansatt.indexOf("Lars-Petter Jelsness-Jørgensen")
    // console.log(index)
    
    
    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index <= ansatt.length; index++){
        console.log(index)
        //skrive ut informasjon for hvert ansatt som tilhører index
        console.log(ansatt[index]);
    }
}
//kjøre funksjon
ansatteIndex()
