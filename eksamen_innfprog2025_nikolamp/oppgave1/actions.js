import { ansatt } from './register.js';

let ansatter = document.getElementById("personer")

//Første funskjon til å indexere og skrive ut informasjon om ansatter
function ansatteIndex(){


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



function visStilling(stilling){
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
        if(ansatt.stilling === stilling){
            ansatter.innerHTML += `
                <li>
                    ${ansatt.navn}
                    <strong>Stilling: </strong>${ansatt.stilling}<br>
                    <strong>Kontor: </strong>${ansatt.kontor}<br>
                    <strong>E-post: </strong>${ansatt.epost}<br>
                    ${ansatt.kursansvar}
                    
                </li>`
        }
    })
}
//knappen for alle ansatte
const btnAlle = document.getElementById("alleAnsatte");

btnAlle.addEventListener("click", () => {
    ansatteIndex();
});

//knappen for alle underviserne (dvs. lektorer og professorer)
const btnUnderviserne = document.getElementById("underviserne");

btnUnderviserne.addEventListener("click", () => {
    visStilling("Lektor")
    visStilling("Professor");
});



//Knappen for professor
const btnProfessor = document.getElementById("professor");
//Når noen klikker på knappen "Professor"...
btnProfessor.addEventListener("click", () => {
    //... får man liste bare med de ansatte med professor stilling
    visStilling("Professor");
});

//Knappen for dekan
const btnDekan = document.getElementById("dekan");

btnDekan.addEventListener("click", () => {
    visStilling("Dekan");
});

//Knappen for rektor
const btnRektor = document.getElementById("rektor");

btnRektor.addEventListener("click", () => {
    visStilling("Rektor");
});

//Knappen for vaktmester
const btnVaktmester = document.getElementById("vaktmester");

btnVaktmester.addEventListener("click", () => {
    visStilling("Vaktmester");
});

//Knappen for lektor
const btnLektor = document.getElementById("lektor");

btnLektor.addEventListener("click", () => {
    visStilling("Lektor");
});




















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

// const btn = document.getElementById("professor")
// btn.addEventListener("click", printMsg)

// function printMsg() {
//     const professorStilling = ansatt.filter(
//         (person) => person.stilling === "Professor"
//     )
//     console.log(professorStilling)
// }
