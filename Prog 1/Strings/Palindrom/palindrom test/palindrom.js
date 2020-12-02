function printuserinput() {
    let palindrom = document.getElementById("userinput");
    let pal=userprint.value;

    document.getElementById("useroutput").innerHTML=pal;
    let palrev = pal.reverse;
    document.getElementById("useroutputrev").innerHTML=palrev
}