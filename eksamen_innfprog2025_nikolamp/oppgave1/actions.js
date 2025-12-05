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

//Knappen for alle ansatte
const btnAlle = document.getElementById("alleAnsatte");
if (btnAlle) {
    btnAlle.addEventListener("click", () => {
        ansatteIndex();
    });
}




//Knappen for professor
const btnProfessor = document.getElementById("professor");
//Sjekker om knappen viness. Hvis ja: Når noen klikker på knappen "Professor"...
if(btnProfessor){
    btnProfessor.addEventListener("click", () => {
    //... får man liste bare med de ansatte med professor stilling
    visStilling("Professor");
});
}

//Knappen for dekan
const btnDekan = document.getElementById("dekan");
if(btnDekan){
    btnDekan.addEventListener("click", () => {
        visStilling("Dekan");
    });
}

//Knappen for rektor
const btnRektor = document.getElementById("rektor");
if(btnRektor){
    btnRektor.addEventListener("click", () => {
        visStilling("Rektor");
    });
}

//Knappen for vaktmester
const btnVaktmester = document.getElementById("vaktmester");
if(btnVaktmester){
    btnVaktmester.addEventListener("click", () => {
        visStilling("Vaktmester");
    });
}

//Knappen for lektor
const btnLektor = document.getElementById("lektor");
if(btnLektor){
    btnLektor.addEventListener("click", () => {
        visStilling("Lektor");
    });
}

//Fjere funksjon
function listUTStilling() {
    const kursoversiktListe = document.getElementById("kursoversiktListe");
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
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
        if(ansatt.stilling === stilling1 || ansatt.stilling === stilling2){
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

//Knappen for underviserne
const btnUnderviserne = document.getElementById("underviserne");
if(btnUnderviserne){
    btnUnderviserne.addEventListener("click", () => {
        underviserne("Professor", "Lektor")
    });
}

//Sjette funskjon
function administartorene(admin1, admin2, admin3){
    ansatter.innerHTML= ""
    ansatt.forEach(ansatt => {
        if(ansatt.stilling === admin1 || ansatt.stilling === admin2 || ansatt.stilling === admin3){
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

//Knappen for administartorene
const btnAdmin = document.getElementById("administrasjon");
if(btnAdmin){
    btnAdmin.addEventListener("click", () => {
        administartorene("Rektor", "Dekan", "Vaktmester")
    }); 
}


//Syende funksjon
function nyAnsatt(){
    // //fornavn
    // let fornavn = document.getElementById("fornavn").value
    // if(fornavn){
    //     if(fornavn === true){
    //         navn += fornavn && ansatt.navn.push(fornavn)
    //     }
    // }

    // //etternavn
    // let lastname = document.getElementById("etternavn").value
    // if(lastname){
    //     if(lastname === true){
    //         etternavn += lastname && ansatt.navn.push(lastname)
    //     }
    // }


    let fornavn = document.getElementById("fornavn").value
    let lastname = document.getElementById("etternavn").value
    let kontor = document.getElementById("kontor").value
    let epost = document.getElementById("mail").value
   
    let kurs = document.getElementById("kurs").value

    if(fornavn || lastname || epost){
        if(!fornavn || !lastname ||!epost){
            ansatt.navn.push(fornavn + "" + lastname) && ansatt.epost.push(epost)
        }
        ansatter.innerHTML += `
                <li>
                    <strong>Navn: </strong>${fornavn} ${lastname} <br>

                    <strong>E-post: </strong>${epost}<br>
                    
                    
                </li>`
        
        }
    }
    

    // //epost
    // let epost = document.getElementById("mail").value
    // if(epost){
    //     if(epost === true){
    //         mail += epost && ansatt.epost.push(epost)
    //     }
    // }


    


const btnNyAnsattt = document.getElementById("btnNyAnsattt")
if(btnNyAnsattt){
    btnNyAnsattt.addEventListener("click", () => {
        nyAnsatt()
        })
}
