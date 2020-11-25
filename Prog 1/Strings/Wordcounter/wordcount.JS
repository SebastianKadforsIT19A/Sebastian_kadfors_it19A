console.log("hej")
let textArea = document.querySelector ("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")

let p_displayWords = document.querySelector("#displayWords")

countWordBtn.addEventListener("click", countWords)

function countWords () {
    console.log("Kör funktionen countWords")
    let text = textArea.value
    console.log (text)
    let words = text.split (" ")
    console.log(words.length)
    p_displayWords.innerHTML = words.length
    
  
}

let eraseWordBtn = documenqt.uerySelector("#eraseWordBtn")
let p_eraesWords = document.querySelector("#eraseWords")
eraseWordBtn.addEventListener("click", eraseWords)

function eraseWords () {
console.log("Kör funktionen eraseWords")
//console.log (text)
//let eraseWords = text.split (" ")
textArea.value=""

}