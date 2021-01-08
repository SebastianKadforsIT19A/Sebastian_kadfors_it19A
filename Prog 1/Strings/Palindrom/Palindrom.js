let displaywords = document.querySelector("#displaywords");
let displaywordsBtn = document.querySelector("#countWordBtn");
displaywordsBtn.addEventListener("click", palindrom);
displaywordsBtn.addEventListener("click", itpali);


let text1 = document.querySelector("#text1")
let text2 = document.querySelector("#text2")



  
  function palindrom(){
      let textArea = document.querySelector("#userprint")
      let text = textArea.value
      console.log (text) 
      let reverse = text.split("").reverse().join("")

      text1.innerHTML=text
      text2.innerHTML=reverse

      console.log (reverse)

      if (text == reverse){
        console.log ("Palindrom")
        } else {
        console.log ("Inte Palindrom")
        }
    
  }






function itpali(){

  let intepali = document.querySelector("#displaypali")


let pali = intepali.value
console.log (pali)

intepali.innerHTML=pali

   
    }

  
      /*
      let palindrom = document.getElementById("userinput");
      let pal=userprint.value;
      document.getElementById("useroutput").innerHTML=pal;
      let palrev = pal.reverse;
      document.getElementById("useroutputrev").innerHTML=palrev
}

  console.log(palindrom);*/
 



function printuserinput() {
    let palindrom = document.getElementById("userinput");
    let pal=userprint.value;

    document.getElementById("useroutput").innerHTML=pal;
}

   /* function textArea(){
    var CountWords = document.getElementById("textArea");
    var name = CountWords.value;
    console.log(name);

}

</script>*/