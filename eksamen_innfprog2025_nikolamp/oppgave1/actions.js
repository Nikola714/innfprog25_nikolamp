import { ansatt } from './register.js';


//Første funskjon til å indexere og skrive ut informasjon om ansatter
function ansatteIndex(){
    
    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index <= ansatt.length; index++){
        console.log(index)
    }
    //Skrive ut datasett med alle ansatte
    console.log(ansatt);
}
//kjøre funksjon
ansatteIndex()


//Andre funksjon lister ut alle ansatte og bruke den første funksjon for å strukturere den html strukturen 
function listerUt(){
    //skrive ut informasjon for hvert ansatt som tilhører index
    console.log(ansatt[index]);

}
listerUt()
