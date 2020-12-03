console.log ("Random hej")
let slumptal = Math.random()

console.log (slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin flip: ${coinflip}`)


if  (coinflip == 1 )  {
    console.log ("tails")
} else  {
    console.log ("head")
}



let sexor = 0

for (let i = 0; i< 100 ; i++) {
    let tärning = Math.floor(Math.random()*6)+1

    if ( tärning == 6){
        sexor++;
    }
    console.log(tärning)
}

console.log(`Antalet sexor är: ${sexor}`)



