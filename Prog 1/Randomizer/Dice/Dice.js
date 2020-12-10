let diceNumber1 = 0 
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")
let p2_result = document.querySelector("#p2_result")

dice1_btn.addEventListener("click", diceroll)   
dice2_btn.addEventListener("click", diceroll)

function diceroll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber1
    console.log(diceNumber)

}

function diceroll2(){
    diceNumber2 = Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber2
}

function checkWin() {
    if (diceNumber1 > diceNumber2){
        console.log("Player 1 Wins")
    } else if (diceNumber1 < diceNumber2){
        console.log("Player 2 Wins")
    } else {
        console.log("Draw")
    }
}