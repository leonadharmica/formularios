window.addEventListener("load",main)

function main(){
// Agarrarle el formulario
let form = document.querySelector("form")
let input = document.querySelector("input")

//Asignar un submit

form.addEventListener("submit",handleSubmit)

// window.handleSubmit = function handlleSubmit(){}
// var handleSubmit = function handleSubmit(){}

//Cancelarle el default

function handleSubmit(e){
    e.preventDefault()
    console.log(e.target[0].value)
}
}



/*
submit: es un evento que se dispara cuando un fomulario intenta ser enviado
*/