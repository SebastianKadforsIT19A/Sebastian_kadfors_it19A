let btn_mandag = document.querySelector("#btn_mandag")
let table_mandag = document.querySelector("#mandag")


let btn_tisdag = document.querySelector("#btn_tisdag")
let table_tisdag = document.querySelector("#tisdag")

let btn_onsdag = document.querySelector("#btn_onsdag")
let table_onsdag = document.querySelector("#onsdag")

let btn_torsdag = document.querySelector("#btn_torsdag")
let table_torsdag = document.querySelector("#torsdag")

let btn_fredag = document.querySelector("#btn_fredag")
let table_fredag = document.querySelector("#fredag")


btn_mandag.onclick = ()=>{
    table_mandag.style.display = "block"
    table_tisdag.style.display = "none"
    table_onsdag.style.display = "none"
    table_torsdag.style.display = "none"
    table_fredag.style.display = "none"
}

btn_tisdag.onclick = ()=>{
    table_mandag.style.display = "none"
    table_tisdag.style.display = "block"
    table_onsdag.style.display = "none"
    table_torsdag.style.display ="none"
    table_fredag.style.display ="none"
}

btn_onsdag.onclick = ()=>{
    table_mandag.style.display = "none"
    table_tisdag.style.display = "none"
    table_onsdag.style.display = "block"
    table_torsdag.style.display = "none"
    table_fredag.style.display = "none"
}

btn_torsdag.onclick = ()=>{
    table_mandag.style.display = "none"
    table_tisdag.style.display = "none"
    table_onsdag.style.display = "none"
    table_torsdag.style.display = "block"
    table_fredag.style.display = "none"
}

btn_fredag.onclick = ()=>{
    table_mandag.style.display = "none"
    table_tisdag.style.display = "none"
    table_onsdag.style.display = "none"
    table_torsdag.style.display = "none"
    table_fredag.style.display = "block"
}