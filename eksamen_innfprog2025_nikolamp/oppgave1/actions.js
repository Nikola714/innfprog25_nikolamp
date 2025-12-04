import { ansatt } from './register.js'; 

let ansatter = document.getElementById("personer");

// 1️⃣ Lager HTML for én ansatt
function ansattKort(index){
    return `
    <li>
        ${ansatt[index].navn}
        <strong>Stilling: </strong>${ansatt[index].stilling}<br>
        <strong>Kontor: </strong>${ansatt[index].kontor}<br>
        <strong>E-post: </strong>${ansatt[index].epost}<br>
        ${ansatt[index].kursansvar || ""}
    </li>`;
}

// 2️⃣ Viser alle ansatte
function ansatteIndex(){
    ansatter.innerHTML = "";
    for(let i = 0; i < ansatt.length; i++){
        ansatter.innerHTML += ansattKort(i);
    }
}

// 3️⃣ Viser ansatte basert på stilling
function visStilling(stilling){
    ansatter.innerHTML = "";

    for(let i = 0; i < ansatt.length; i++){
        if(stilling === "underviser"){
            if(ansatt[i].stilling === "Professor" || ansatt[i].stilling === "Lektor"){
                ansatter.innerHTML += ansattKort(i);
            }
        } else if(ansatt[i].stilling === stilling){
            ansatter.innerHTML += ansattKort(i);
        }
    }
}

// ✅ Knapper
document.getElementById("alleAnsatte").addEventListener("click", () => {
    ansatteIndex();
});

document.getElementById("underviserne").addEventListener("click", () => {
    visStilling("underviser");
});

document.getElementById("professor").addEventListener("click", () => {
    visStilling("Professor");
});

document.getElementById("lektor").addEventListener("click", () => {
    visStilling("Lektor");
});

document.getElementById("dekan").addEventListener("click", () => {
    visStilling("Dekan");
});

document.getElementById("rektor").addEventListener("click", () => {
    visStilling("Rektor");
});

document.getElementById("vaktmester").addEventListener("click", () => {
    visStilling("Vaktmester");
});

// ✅ Start med å vise alle ansatte
ansatteIndex();
