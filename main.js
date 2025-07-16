import{pi,iva} from './constantes.js'
import{diasSemana} from './constantes.js'

function areaF(){
    return pi * (5 * 5)
}
console.log(areaF())

function precioConIva(){
    let valorIva = 100 * iva;
    return 100 + valorIva
}
console.log(precioConIva())
console.log(diasSemana[2])

//Ejercicio 2
import{sumar,restar,multiplicar,area} from './operacionesMatematicas.js'
console.log("Sumar: " + sumar(2,6))
console.log("Restar: " + restar(8,6))
console.log("Multiplicar: " + multiplicar(2,6))
console.log("Area: " + area(8))