let displaywords = document.querySelector("#displaywords");

function countWords(){

    if (palindrom(textArea.value)){
      p_displaywords.innerHTML = "Det är palindrom"
    } else {
  
      p_displaywords.innerHTML = "det är inte palindrom"
    }
  
  }
  
  
  function palindrom(str){
      let reversed = str.split(",").reverse(  ).join("")
      console.log(reversed)
      if (reversed === str) 
        return true;
  
      return false;
     
      
      let palindrom = document.getElementById("userinput");
      let pal=userprint.value;
      document.getElementById("useroutput").innerHTML=pal;
      let palrev = pal.reverse;
      document.getElementById("useroutputrev").innerHTML=palrev
}

  console.log(palindrom);
 



function printuserinput() {
    let palindrom = document.getElementById("userinput");
    let pal=userprint.value;

    document.getElementById("useroutput").innerHTML=pal;

}