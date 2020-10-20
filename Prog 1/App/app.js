let p_siffra = document.querySelector("#siffra");
let upp = document.querySelector("#uppKnapp");
let ned = document.querySelector("#nedKnapp");
let reset = document.querySelector("#reset");

let siffra = 0; //ändra vid knapptryckingar
p_siffra.innerHTML = siffra;


upp.addEventlistener("click", raknaUpp);

function raknaupp () {
    console.log("Räkna upp knapp tryck");
    // öka värdet på siffra
    siffra = siffra + 1;
    console.log(siffra);
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
    siffra = 0 
    p_siffra.innerHTML=0
    teckenCheck();


}

function teckenCheck() {
    if (siffra < 0) {
    p_tecken.innetHTML ="Negativt";
} else if (siffra > 0) {
    p_tecken.innerHTML = "Positivt";
} else {
    ptecken.innerHTML = "Noll";
}
}