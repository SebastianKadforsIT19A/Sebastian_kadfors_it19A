let name = "sebastian" // sträng
let age  = 17 // heltal, int
console.log(`hej jag heter ${name} och jag är ${age} är gammal`)
// skapar en variabel som heter name och tilldel

if (age >= 18) {
    console.log("du är vuxen")
} else {
    console.log("du är barn")
}
let texts = document.querySelector("#text")
let text = document.querySelector `${name} är ${age} är gammal`
let multi = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

multi.innerHTML = `multiplikation`
div.innerHTML = `divsion`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

//skapar variabel för knappen
let button = document.querySelector("#knapp")

//lägger till en eventyssnare till knappen

button.addEventListener("click", math)

function math(event){
    console.log("math-funktionen körs")

    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2}`
    sub.innerHTML = `${num1}+${num2}=${num1+num2}`
    multi.innerHTML = `${num1}+${num2}=${num1+num2}`
    div.innerHTML = `${num1}+${num2}=${num1+num2}`
}