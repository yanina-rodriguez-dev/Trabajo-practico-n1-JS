//para agregar un comentario

/*
para poner
 comentarios en 
 multiples lineas
*/

//Declarar una variable (var - let - const)
let nombreUsuario = "Gerardo Mansilla"
const anio = 2023

//Mostrar por consola
// palabra reservada del lenguaje que hace referencia a la consola del navegador 
console

//consol.log deja enviar un mensaje a la consola del navegador entre comillas se encierra el texto, para que se vea en la consola 
console.log("Hola mundo")

// para variables poner las comillas y para no mostrar no oiner ls comillas

// el punto y coma no es obligatorio en javasgript  pero es BUENA PRACTICA para identificar donde comienza y donde termina cada linea de codigo 

console.log ("Hola mundo")
console.log(nombreUsuario);
console.log(nombreUsuario + " es alumno del año" + anio);
console.log(`${nombreUsuario} es alumno del año ${anio}`)

//javascript y html no se conocen osea que tengo que hacer algo mas engañandolo a javascript para hacer una interprettacion como cadena de texto 

//mostrar un mensaje en el doc de html 
document.write(`<h1 class="titulo" >Hola mundo</h1>`)
document.write(nombreUsuario + ` es alumno del año `+ anio);

//mostrar un mensaje en una ventana emergente 
// mostrar un mensaje en una ventana emergente
alert('Este es mi primer alert');

// modificar el contenido de una variable
nombreUsuario = 'Mauricio Soria';
document.write(nombreUsuario +' es alumno del año '+ anio);
document.write('<br>esto es otra prueba');