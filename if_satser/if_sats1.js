let tal = 25

// avgöra om talet är jämt eller udda


//modeloperator
console.log(`${5%2}`)


//tal1%2 är 0: jämnt
//tal1%2 är 1: udda

if (tal1%2  === 0){
    console.log ("Udda")
} else { 
    console.log("Jämnt")
}

// Upgift
// 1. lät användaren skriva in ett tal
// 2. avgör om talet är positivt eller negativt 

let tal1 = prompt("Ange ett tal: ")

if (tal1 > 0 ){
    console.log("Positivt")
} else if (tal1 == 0) {
    console.log("Talet är 0")
} else {
    console.log("Negativt")
}