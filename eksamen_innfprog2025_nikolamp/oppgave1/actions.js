import { ansatt } from './register.js';
import { stillinger } from './register.js';


let ansatter = document.getElementById("personer")

//Første funskjon til å indexere ansatter
function ansatteIndex(){
    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index < ansatt.length; index++){
        console.log(index)
        
        //Andre funksjon lister ut alle ansatte og bruke den første funksjon for å strukturere den html strukturen 
        function ansattListe(){
            ansatter.innerHTML += `
            <li>
                <li>${ansatt[index].navn}</li>
                <li><strong>Stilling: </strong>${ansatt[index].stilling}</li>
                <li><strong>Kontor: </strong>${ansatt[index].kontor}</li>
                <li><strong>E-post: </strong>${ansatt[index].epost}</li>
                <li>${ansatt[index].kursansvar}</li>
                
            </li>`
        }
        ansattListe()
        // console.log(ansatteIndex)
    }
}
//kjøre funksjon
ansatteIndex()

//Tredje funksjon tar imot en parameter som innsette stilling og filtrere alle ansatte på den innsette parameter, dvs. hvis noen velger dekan i meny kommer kun vare ansatte med stillinger dekan
function visStilling(stilling){
    //tome ansatter
    ansatter.innerHTML= ""
    //gå for hvert liste element
    ansatt.forEach(ansatt => {
        //hvis stilling er "Lektor" for eksempel så hviser hele informaosjon om alle de som inneholder stilling lektor
        if(ansatt.stilling === stilling){
            ansatter.innerHTML += `
                <li>
                    <li>${ansatt.navn}</li>
                    <li><strong>Stilling: </strong>${ansatt.stilling}</li>
                    <li><strong>Kontor: </strong>${ansatt.kontor}</li>
                    <li><strong>E-post: </strong>${ansatt.epost}</li>
                    <li>${ansatt.kursansvar}</li>
                    
                </li>`
        }
    })
}

//Knappen for alle ansatte
const btnAlle = document.getElementById("alleAnsatte");
//#OPPD3. Jeg legget til if-test som sjekker den id finnes i html fillen. Siden jeg testet alt i et html filen og i oppgave 3 har jeg to html filer, og jeg fikk error at jeg laget en variabel som tilhører til en id men id finnes ikke i html filles. Det er eneste endring jeg har gjort i forhold til oopgave 3, dvs. jeg laget if tester som sjekker hvis viariabel finnes gjør det og det
if (btnAlle) {
    btnAlle.addEventListener("click", () => {
        ansatteIndex();
    });
}




//Knappen for professor
const btnProfessor = document.getElementById("professor");
//Sjekker om knappen viness. Hvis ja: Når noen klikker på knappen "Professor"...
//#OPPD3
if(btnProfessor){
    btnProfessor.addEventListener("click", () => {
    //... får man liste bare med de ansatte med professor stilling
    visStilling("Professor");
});
}

//Knappen for dekan
const btnDekan = document.getElementById("dekan");
//#OPPD3
if(btnDekan){
    btnDekan.addEventListener("click", () => {
        visStilling("Dekan");
    });
}

//Knappen for rektor
const btnRektor = document.getElementById("rektor");
//#OPPD3
if(btnRektor){
    btnRektor.addEventListener("click", () => {
        visStilling("Rektor");
    });
}

//Knappen for vaktmester
const btnVaktmester = document.getElementById("vaktmester");
//#OPPD3
if(btnVaktmester){
    btnVaktmester.addEventListener("click", () => {
        visStilling("Vaktmester");
    });
}

//Knappen for lektor
const btnLektor = document.getElementById("lektor");
//#OPPD3
if(btnLektor){
    btnLektor.addEventListener("click", () => {
        visStilling("Lektor");
    });
}

//Fjere funksjon
function listUTStilling() {
    const kursoversiktListe = document.getElementById("kursoversiktListe");
    //#OPPD3
    if(kursoversiktListe){
        kursoversiktListe.innerHTML = "";
    
        ansatt.forEach(a => {
            if (a.kursansvar !== "Ingen kursansvar") {
                kursoversiktListe.innerHTML += `<li>${a.kursansvar.join("<li>")}</li>`;
            } 
        });
    }
    }
listUTStilling();


//Femte funksjon
function underviserne(stilling1, stilling2){
    //tomme variabel og lage ny utskift
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
        if(ansatt.stilling === stilling1 || ansatt.stilling === stilling2){
            //ny utskrift skriver ut de som er lektor og underviserne som jeg definerer under avstulte tag for funkjson
            ansatter.innerHTML += `
                <li>
                    <li>${ansatt.navn}</li>
                    <li><strong>Stilling: </strong>${ansatt.stilling}</li>
                    <li><strong>Kontor: </strong>${ansatt.kontor}</li>
                    <li><strong>E-post: </strong>${ansatt.epost}</li>
                    <li>${ansatt.kursansvar}</li>
                    
                </li>`
        }
    })
}

//Knappen for underviserne
const btnUnderviserne = document.getElementById("underviserne");
//#OPPD3
if(btnUnderviserne){
    btnUnderviserne.addEventListener("click", () => {
        underviserne("Professor", "Lektor")
    });
}

//Sjette funskjon
function administartorene(admin1, admin2, admin3){
    //tommer utskrift
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
        if(ansatt.stilling === admin1 || ansatt.stilling === admin2 || ansatt.stilling === admin3){
            //lage ny utskrift med alle personer fra administrasjon dvs. rektor, vaktmester og dekaner
            ansatter.innerHTML += `
                <li>
                    <li>${ansatt.navn}</li>
                    <li><strong>Stilling: </strong>${ansatt.stilling}</li>
                    <li><strong>Kontor: </strong>${ansatt.kontor}</li>
                    <li><strong>E-post: </strong>${ansatt.epost}</li>
                    <li>${ansatt.kursansvar}</li>
                    
                </li>`
        }
    })
}

//Knappen for administartorene
const btnAdmin = document.getElementById("administrasjon");
//#OPPD3
if(btnAdmin){
    btnAdmin.addEventListener("click", () => {
        administartorene("Rektor", "Dekan", "Vaktmester")
    }); 
}


//Syende funksjon
function nyAnsatt() {
    //lage variabel som skal ta verdi av det brukeren skrevet
    let fornavn = document.getElementById("fornavn").value;
    let lastname = document.getElementById("etternavn").value;
    let kontor = document.getElementById("kontor").value;
    let epost = document.getElementById("mail").value;
    let kurs = document.getElementById("kurs").value;
    let stilling = document.getElementById("stilling").value;

    //hvis noen har ikke fylt ut noe kommer alert på side
    if (!fornavn || !lastname || !epost || !kontor || !kurs) {
        alert("Vennligst fyll ut alle felt.");
        return;
    }

    //legge ny ansatt
    ansatter.innerHTML += `
        <li>
            <li><strong>Navn: </strong>${fornavn} ${lastname} </li>  
            <li><strong>Kontor: </strong>${kontor}</li>
            <li><strong>E-post: </strong>${epost}</li>
            <li><strong>Stilling: </strong>${stilling}</li>
            <li><strong>Kursansvar: </strong>${kurs}</li>
        </li>`;

    
}

    

const btnNyAnsattt = document.getElementById("btnNyAnsattt")
//#OPPD3
if(btnNyAnsattt){
    btnNyAnsattt.addEventListener("click", () => {
        nyAnsatt()
        })
}


//Åttende funskjon 
//Kode for å løse den oppagve starer harstarter her
//#OPPD3
//hvis i html finner ideks med navn "btnSlettAnsatt"

if(btnNyAnsattt){
function slettAnsatt() {
    ansatter.innerHTML = ""; // tømming før vi legger inn ny liste

    ansatt.forEach(a => {
        const li = document.createElement("li");

        li.innerHTML = `
            <li>${a.navn}</li>
            <li><strong>Stilling:</strong> ${a.stilling}</li>
            <li><strong>Kontor:</strong> ${a.kontor}</li>
            <li><strong>E-post:</strong> ${a.epost}</li>
            <li>${a.kursansvar}</li>
        `;

        // Lag knapp for hvert element
        const sletteBtn = document.createElement("button");
        sletteBtn.textContent = "Slett ansatt";

        // Event listener på hver knapp
        sletteBtn.addEventListener("click", () => {
            li.remove(); // fjerner bare denne listen
        });

        //legge til ny elemnt på slutten av hvert ansatt liste
        li.appendChild(sletteBtn);
        ansatter.appendChild(li);
    });
}

slettAnsatt(); // kall funksjonen for å vise listen
}