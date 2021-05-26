let btn_IT = document.querySelector("#btn_IT")
let btn_Media = document.querySelector("#btn_media")
let table_IT = document.querySelector("#IT")
let table_media = document.querySelector("#Media")

btn_IT.onclick = ()=>{
    table_IT.style.display = "block"
    table_media.style.display = "none"
}

btn_media.onclick = ()=>{
    table_IT.style.display = "none"
    table_media.style.display = "block"
}