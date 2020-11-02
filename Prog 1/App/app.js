let p_siffra = document.querySelector("#siffra");
let upp = document.querySelector("#uppKnapp");
let ned = document.querySelector("#nedKnapp");
let reset = document.querySelector("#reset");

let p_tecken = docuemnt.querySelector("#tecken");

let siffra = 0; //ändra vid knapptryckingar

p_siffra.innerHTML = siffra;
p_tecken.innerHTML = "Noll";



upp.addEventlistener("click", raknaUpp);
ned.addEventListener("click", raknaNed);
reset.addEventListener("click", resetNummer);

function raknaUpp () {
    // öka värdet på siffra
    siffra = siffra + 1;
    //skriva ut den i p_siffra
    p_siffra.innerHTML = siffra;
    teckenCheck();
}

//skapa funktion för att räkna ned
function raknaNed(){
siffra = siffra - 1;
p_siffra.innerHTML = siffra;
teckenCheck();
}


// skapa funktion för att nollställa 
function resetNummer() {
    siffra = 0;
    p_siffra.innerHTML=0;
    teckenCheck();


}

function teckenCheck() {
    if (siffra < 0) {
    p_tecken.innetHTML ="Negativt";
    p_siffra.style.color = "darkred";
} else if (siffra > 0) {
    p_tecken.innerHTML = "Positivt";
    p_siffra.style.color = "green";
} else {
    p_tecken.innerHTML = "Noll";
    p_siffra.style.color = "blue";
}
}