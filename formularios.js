window.addEventListener("load",main)

function main(){
// Agarrarle el formulario. Nunca se agarra el boton. Siempre etiqueta form
let form = document.querySelector("form")
let nombre = document.querySelector("#nombre")

//change : Se dispara cuando el control de formulario cambia de valor

let paises = {
    ar : ["Buenos Aires", "La Pampa"],
    ve : ["Margarita", "Caracas"],
    ch : ["Beijing", "Shangai"]
}

/*
1) Seleccionar el select
2) Asignarle un evento change
3) El callback del change tiene que poder agarrar el valor del select
4) Con el valor obtenido, buscar en el objeto "paises" la propiedad 
que le corresponda
5) Si la propiedad no existe se tiene que ver en pantalla un mensaje 
que diga "Tiene que seleccionar una opcion" en color rojo
6) Si la propiedad existe, tenemos que recorrer el array
que tiene como valor asociado
7) Por cada valor del array se tiene que crear un <option>
8) Agregar todos los <option> creados a un nuevo <select>
9) Agregar el <select> al DOM

*/

let select = document.querySelector("select")

select.addEventListener("change", mostrarProv)

function mostrarProv(){
    let valor = select.value
    // paises.ve = paises[pais]
    let provincias = paises[valor]

    if (provincias == undefined) {
        let parrafo = document.createElement('p')
        let texto = document.createTextNode('Tiene que seleccionar una opcion')
        parrafo.appendChild(texto)
        document.body.appendChild(parrafo);
    }

}


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

MAYUSCULAS Y MINUSCULAS

*/