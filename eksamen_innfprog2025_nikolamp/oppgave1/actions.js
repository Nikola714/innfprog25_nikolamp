import { ansatt } from './register.js';


//Første funskjon til å indexere og skrive ut informasjon om ansatter
function ansatteIndex(){

    const ansatter = document.getElementById("personer")

    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index < ansatt.length; index++){
        //Andre funksjon lister ut alle ansatte og bruke den første funksjon for å strukturere den html strukturen 
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
    }
}
//kjøre funksjon
ansatteIndex()

//Tredje funksjon tar imot en parameter som innsette stilling og filtrere alle ansatte på den innsette parameter, dvs. hvis noen velger dekan i meny kommer kun vare ansatte med stillinger dekan
// function filterStilling() {
//     const professor = document.getElementById("professor")
//     const professorFilter = ansatt.filter(
//         (professorAnsatt) => professorAnsatt.stilling === "Professor"
//     )
//     if(professor === "click"){
//         professorFilter
//     }

// }
// filterStilling()  

const btn = document.getElementById("professor")
btn.addEventListener("click", printMsg)

function printMsg() {
    const professorStilling = ansatt.filter(
        (person) => person.stilling === "Professor"
    )
    console.log(professorStilling)
}
