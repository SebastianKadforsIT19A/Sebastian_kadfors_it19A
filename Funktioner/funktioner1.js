let namn = "Sebastian" // den här variabeln har ett globalt scope

function sayHello(){
    let alder = 17 // lokal variabel, synlig i funktionen och inte utanför
    console.log(`Hej ${namn}, du är ${alder} år gammal`)
}

// anropar funktionen sayHello
sayHello()
// console.log (`Min ålder är ${alder}`) - alder är inte synlig här



function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log (`2+5=${addera(2,5)}`)


//skapa en subtraherafunktion
function subtrahera(tal1,tal2){}


// skapa en subtraherafunktion
// skapa en multiplicerafunktion
/* skapa en dividerafunktion
(om någon försöker dela med 0, säg att man inte får dela med 0)
*/


function dividera(tal1,tal2){
    if (tal2 == 0){
        return "får ej dela med 0"
    }
    let kvot = tal1/tal2
    return kvot
}


console.log(`35/7 = ${dividera(35,7)}`)
console.log(`2/0 = ${dividera(2,0)}`)

 