let colorPicket= document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "hotpink"
colorPicket.addEverntListener("change", colorchange())

function colorChanger (event){
    let color = event.target.value;
    console.log(color)
    rektangel.style.backgroundColor = color
}
