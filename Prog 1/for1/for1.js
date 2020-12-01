let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");
let p_summa = document.querySelector("#summa");
let p_lektioner = document.querySelector("#lektioner");
let summa = 0;

for (let i= 1; i <=50; i++) {
  p_talserie1.innerHTML +=${2 * i}, ;
  p_talserie2.innerHTML += ${2 * i + 1}, ;
}

p_summa.innerHTML += 1 + 2 + 3 +...+ 9 + 10;
console.log(summa);

for (let i = 0; i < 100; i++) {
  console.log(`${i} i will write all over the wall`);
}

var lektioner = [
  "nätverksteknik",
  "datorteknik",
  "tillämpladprogramering",
  "engelska",
  "svenska",
  "programering",
];
var text = "hej";
var i;
for (i = 0; i < lektioner.length; i++) {
  text += lektioner[i] + "<br>";
}
document.getElementById("lektioner").innerHTML = text;