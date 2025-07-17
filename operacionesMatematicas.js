import {pi,iva,descuento} from './constantes.js'

export function sumar(a, b){
    return a + b
}
export function restar(a, b){
    return a - b
}
export function	multiplicar(a, b){
    return a * b
}
export function area(radio){
    return pi * (radio **2)
}

//Ejercicio 3
export function calcularTotal(precio,cantidad){
    return precio * cantidad;
}
export function aplicarImpuestos(total,iva){
    let totalI = total * iva
    return totalI + total
}
export function aplicarDescuento(total,descuento){
    let totalD = total * descuento
    return total - totalD
}

//Ejercicio 5
import{roles} from './usuariosConstantes.js'
import { crearUsuario } from './usuarios.js'
export function aplicarDescuentoPorRol(total, usuario){
  if (usuario.rol === roles.admin) {
    return total * 0.8; 
  } else if (usuario.rol === roles.cliente) {
    return total * (1 - descuento); 
  }
  return total; 
}

