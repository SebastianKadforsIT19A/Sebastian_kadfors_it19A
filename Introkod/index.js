let name = "sebastian" // sträng
let age  = 17 // heltal, int
console.log(`hej jag heter ${name} och jag är ${age} är gammal`)
// skapar en variabel som heter name och tilldel

if (age >= 18) {
    console.log("du är vuxen")
} else {
    console.log("du är barn")
}
let text = document.querySelector("#text")
text.innerText = `${name} är ${age} är gammal`