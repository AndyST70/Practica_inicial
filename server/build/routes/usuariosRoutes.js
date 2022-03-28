"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importar router, metodo que devuelve un objeto con las rutas
const usuarioController_1 = require("../controllers/usuarioController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Almacena un objeto que devuelve el método router
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.UsuarioController.lista); //Ruta que devuelve el listado de usuarios
        this.router.get('/:carnet', usuarioController_1.UsuarioController.verUsuario); //Ruta que devuelve un solo usuario
        this.router.post('/', usuarioController_1.UsuarioController.crearUsuario); //Ruta que envía el método post para inserción de datos
        this.router.delete('/:carnet', usuarioController_1.UsuarioController.eliminarUsuario); //Ruta para eliminar usuario
        this.router.put('/:carnet', usuarioController_1.UsuarioController.actualizarUsuario); //Ruta para actualizar usuario
    }
}
const usuariosR = new UsuariosRoutes();
exports.default = usuariosR.router;
