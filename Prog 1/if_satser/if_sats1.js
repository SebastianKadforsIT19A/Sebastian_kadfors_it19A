
/*  ungdom och pensionärer betalar 
 500kr på västtrafik
 övriga betalar: 775kr
ungdom under 20 år
pensionär över 65 år 
 */

let age= prompt ("Ange din ålder")
let langd= prompt ("Ange längden")

//  eller: ||
if (age < 20 || age > 65){
    console.log("Det kostar 500kr")
} else {
    console.log("775kr")
}



/* höjd > 130 och ålder > 10 så får man
åka balder på liseberg */

let alder = 12
let hojd = 125

if (age > 11 && hojd > 130){
    console.log("Du får åka balder")
} else {
    console.log("Åk något annat")
} 