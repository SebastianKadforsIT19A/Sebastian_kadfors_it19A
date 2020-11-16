let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klasslista")
let summa = 0

for (let i=1; i<=10; i++){
@@ -20,3 +21,17 @@} for= (let i=0; i<=10; i++) {
    summa += 1
}
p_summa.innerHTML += `1 + 2 +3 +...+9+10 = ${summa}`


// skapa en lista med elever
let elever = ["Kokchun", "Henrik", "Thomas", "Tatiana", "Zsofia", "David"]

p_klass.innerHTML = "Klass IT19A innehåller följande elever: <br/>"

console.log(elever.length)

for (let k = 0; k < elever.length; k++){
    p_klass.innerHTML += `${k+1}. ${elever[k]} <br/>`}