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

let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)


// längden av en sträng

let mening = "jag läser it-programmet på nti kronhus"
let ord = mening.split (" ")

console.log (ord)
console.log (ord [2])

let antal_ord = ord.length
console.log(`antal ord i meningen är ${antal_ord}`)



