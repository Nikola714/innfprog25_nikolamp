import { ansatt } from './register.js';


let ansatter = document.getElementById("personer")

//Første funskjon til å indexere ansatter
function ansatteIndex(){
    //For løkke for å få indexer for hvert ansatt
    for(let index = 0; index < ansatt.length; index++){
        console.log(index)
        
        //Andre funksjon lister ut alle ansatte og bruke den første funksjon for å strukturere den html strukturen 
        function ansattListe(){
            ////////KI anbefalte meg å lage en liste for for hvert aansatt istedenfor liste element for hvert nøkkelord///////
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
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
            /////////KI let til .forEach og hjulpet meg med logikk siden jeg startet med kode: hvis asnatt.stilling === "Professor" skriv ut bare de med stilling Profesor og jeg skulløe gjøre det for hvert stilling
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
//#OPPD3
if(btnProfessor){
    btnProfessor.addEventListener("click", () => {
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

//Fjere funksjon for å liste ut alle stillinger
function listUTStilling() {
    const kursoversiktListe = document.getElementById("kursoversiktListe");
    //#OPPD3
    if(kursoversiktListe){
        kursoversiktListe.innerHTML = "";
    
        //////////KI hjulpet meg ved å bruke forEach /////////////////
        ansatt.forEach(a => {
            if (a.kursansvar !== "Ingen kursansvar") {
                kursoversiktListe.innerHTML += `<li>${a.kursansvar.join("<li>")}</li>`;
            } 
        });
    }
    }
listUTStilling();


//Femte funksjon for underviserne
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

//Sjette funskjon for å få bare de som jobber i administrasjon
function administartorene(admin1, admin2, admin3){
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


//Syende funksjon for å lege ny ansatt
function nyAnsatt() {
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const kontor = document.getElementById("kontor").value;
    const epost = document.getElementById("mail").value;
    const kurs = document.getElementById("kurs").value;
    const stilling = document.getElementById("stilling").value;

    if (!fornavn || !etternavn || !epost || !kontor || !kurs) {
        alert("Vennligst fyll ut alle felt.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <li><strong>Navn:</strong> ${fornavn} ${etternavn} </li>
        <li><strong>Stilling:</strong> ${stilling} </li>
        <li><strong>Kontor:</strong> ${kontor} </li>
        <li><strong>E-post:</strong> ${epost} </li>
        <li><strong>Kursansvar:</strong> ${kurs} </li>
    `;

    // Lag slett-knapp
    const sletteBtn = document.createElement("button");
    sletteBtn.textContent = "Slett ansatt";
    sletteBtn.addEventListener("click", () => {
        li.remove(); // Fjerner denne ansatte fra listen
    });

    ansatter.appendChild(li);
    li.appendChild(sletteBtn);

    /////KI ga meg den muligheter til å tome input  feltene etter man velgte knappen for å legge til ny asnatt
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("kontor").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("kurs").value = "";
    document.getElementById("stilling").value = "";
}

// Event listener for knappen
const btnNyAnsatt = document.getElementById("btnNyAnsattt");
//#OPPD3
if (btnNyAnsatt) {
    btnNyAnsatt.addEventListener("click", nyAnsatt);
}




//Åttende funskjon for å slette
//hvis i html finner ideks med navn "btnSlettAnsatt"
if (btnNyAnsatt){

    /////KI ga meg kode for å slette spesielt person, jeg prøvde gjøre det selv med det funket ikke
function slettAnsatt() {
    ansatter.innerHTML = ""; 

    ansatt.forEach(a => {
        const etasantt = document.createElement("li");

        etasantt.innerHTML = `
            <li>${a.navn}</li>
            <li><strong>Stilling:</strong> ${a.stilling}</li>
            <li><strong>Kontor:</strong> ${a.kontor}</li>
            <li><strong>E-post:</strong> ${a.epost}</li>
            <li>${a.kursansvar}</li>
        `;

        const sletteBtn = document.createElement("button");
        sletteBtn.textContent = "Slett ansatt";

        sletteBtn.addEventListener("click", () => {
            etasantt.remove(); 
        });

        ansatter.appendChild(etasantt);
        etasantt.appendChild(sletteBtn);
    });
}

slettAnsatt(); 
}