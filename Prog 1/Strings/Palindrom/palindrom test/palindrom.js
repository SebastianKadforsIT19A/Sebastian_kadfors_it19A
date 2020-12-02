function printuserinput() {
    let palindrom = document.getElementById("userinput");
    let pal=userprint.value;

    document.getElementById("useroutput").innerHTML=pal;
 
}


function palindrom(str){
    let reversed = str.split(",").reverse().join("")
    console.log(reversed)
    if (reversed === str) 
      return true;

    return false;

}

let palindrome = function (word) {
    let len = word.lenght;
    let start= word.substring(0, Math.floor(len/2) ).toLowerCase();
    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

    let flip = end.split('').reverse().join('');
    return (start == flip);
}

let displaywords = document.querySelector("#displaywords");

function countWords(){

    if (palindrom(textArea.value)){
      p_displaywords.innerHTML = "Det är palindrom"
    } else {
  
      p_displaywords.innerHTML = "det är inte palindrom"
    }
  
  }

console.log(palindrome('textareavalue'));
console.log(palindrome('radar'));
console.log(palindrome('redder'));
console.log(palindrome('window'));