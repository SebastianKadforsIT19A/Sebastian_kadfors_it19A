console.log ("Strings")


// kontatenering

let fornamn = "De vete"
let efternamn = "fan asså"
let namn = fornamn + " " + efternamn
let adress = "Längst ner i Röven"
let telefon = 112
let alder =  "Dummare än en femte klassare"


console.log ("Namn: " + namn + "\n" + "Ålder: " + alder + "\n"+ "Adress: " + adress + "\n" + "Telefon: " + telefon)

/*
namne: Sebastian kadfors
Ålder 17
Adress Kronhusgatan 9 
Telefon: 112
*/


let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Ålder: " + alder + "<br>" + "Telefon: " + telefon

// indexering
let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet [0]
let bokstav5 = alfabet [4]
let bokstav6 = alfabet [28]
console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 0 är: ${bokstav5}`)
console.log(`Bokstav på index 0 är: ${bokstav6}`)


// längden av en sträng
let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antalbokstäver}`)