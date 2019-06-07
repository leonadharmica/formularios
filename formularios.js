window.addEventListener("load",main)

function main(){
// Agarrarle el formulario. Nunca se agarra el boton. Siempre etiqueta form
let form = document.querySelector("form")
let input = document.querySelector("input")

//Asignar un submit

form.addEventListener("submit",handleSubmit)

// window.handleSubmit = function handlleSubmit(){}
// var handleSubmit = function handleSubmit(){}

//Cancelarle el default

function handleSubmit(e){
    e.preventDefault()
    //Cualquier cosa que pueda escribir va a ser el value del input
    let nombre = e.target[0].value
    nombre = nombre.trim()
    console.log(nombre.length)
}
}



/*
submit: es un evento que se dispara cuando un fomulario intenta ser enviado

String.length => Number - La longitud del string

String.trim() => String - Devuelve el mismo string pero sin espacios 
antes ni despues

{String|Array}.indexOf() => Number - Retorna la posicion de la 
instancia del elemento X ó -1 si no se encuentra

{String|Array}.includes() => Boolean. Retorna verdadero o falso
dependiendo si X se encuantra o no

*/