import { ansatt } from './register.js';


//Første funskjon til å indexere og skrive ut informasjon om ansatter
function ansatteIndex(){

    const ansatter = document.getElementById("personer")

    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index < ansatt.length; index++){
        function ansattListe(){
            ansatter.innerHTML += `
            <li>
                ${ansatt[index].navn}
                <strong>Stilling: </strong>${ansatt[index].stilling}<br>
                <strong>Kontor: </strong>${ansatt[index].kontor}<br>
                <strong>E-post: </strong>${ansatt[index].epost}<br>
                ${ansatt[index].kursansvar}
                
            </li>`
        }
        ansattListe()

        // console.log(index)
    }
    //Skrive ut datasett med alle ansatte
    // console.log(ansatt);
}
//kjøre funksjon
ansatteIndex()


// //Andre funksjon lister ut alle ansatte og bruke den første funksjon for å strukturere den html strukturen 
// function listerUt(){
//     //skrive ut informasjon for hvert ansatt som tilhører index
//     console.log(ansatt[index]);

// }
// listerUt()
