import{roles} from './usuariosConstantes.js'
export function crearUsuario(nombre, rol){
    const fechaRegistro = new Date().toLocaleDateString();
    if (rol !== roles.admin && rol !== roles.cliente) {
    throw new Error("Rol inválido. Debe ser 'admin' o 'cliente'.");
  }
return {
    nombre: nombre,
    rol: rol,
    fechaRegistro: fechaRegistro
  };

}

export function esAdmin(usuario) {
  return usuario.rol === roles.admin;
}