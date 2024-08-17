/**
 * EJERCICIO
 */

let name = prompt("¿Cúal es tu nombre?:");
let age = prompt("¿Cuántos años tienes?:");
let programming_lang = prompt("¿Qué lenguaje de programación estás estudiando?: ")

alert(`Hola ${name}, tienes ${age} años y ya estás aprendiendo ${programming_lang}!`)

/**
 * OPCIONAL
 */

let answer = prompt(`¿Te gusta estudiar ${programming_lang}? \n1.- SÍ.\n2.- NO.`)

answer == 1 
  ? alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito") 
  : alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")