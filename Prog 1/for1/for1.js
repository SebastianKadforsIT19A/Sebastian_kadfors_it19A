let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");
let p_summa = document.querySelector("#summa");
let p_lektioner = document.querySelector("#lektioner");
let summa = 0;
//For satserna här tar då 0 och gångrar den me 2, och för att kunna få de ojämnatalen så plusar man på en etta 
for (let i= 0; i <=50; i++) {
  p_talserie1.innerHTML += ` ${2 * i }` ;
  p_talserie2.innerHTML += ` ${2 * i + 1 }` ;
}

p_summa.innerHTML += 0, + 1, + 2, + 3, + + 9, + 10;
console.log(summa);

for (let i = 0; i < 100; i++) {
  console.log(`${i} i will write all over the wall`);
}
//Denna beskriver vilka lektioner vi har med hjälp av variabler
var lektioner = [
  "nätverksteknik",
  "datorteknik",
  "tillämpladprogramering",
  "engelska",
  "svenska",
  "programering",
];

var text = "";
var i;
for (i = 0; i < lektioner.length; i++) {
  text += lektioner[i] + "<br>";
}
//Denna skriver ut lektionerna så man kan se dem
document.getElementById("lektioner").innerHTML = text;