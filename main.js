import{pi,iva,descuento} from './constantes.js'
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

//Ejercicio 3 
import { calcularTotal,aplicarDescuento,aplicarImpuestos } from './operacionesMatematicas.js';
let total = calcularTotal(20,3)
console.log("Es total es: " + total);
let totalConImpuesto = aplicarImpuestos(total,iva)
console.log("El total con IVA es: " + totalConImpuesto);
let totalConDescuento = aplicarDescuento(totalConImpuesto,descuento)
console.log("El total con descuentos es : " + totalConDescuento)

//Ejercicio 4
import{roles} from './usuariosConstantes.js'
import{crearUsuario} from './usuarios.js'

let usuario1 = crearUsuario("Pedro",roles.admin)
let usuario2 = crearUsuario("Carlos", roles.cliente)
console.log(usuario1);
console.log(usuario2);

//Ejercicio 4



