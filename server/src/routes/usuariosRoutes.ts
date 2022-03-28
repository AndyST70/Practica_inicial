import { response, Router } from "express"; //Importar router, metodo que devuelve un objeto con las rutas
import {UsuarioController} from '../controllers/usuarioController';

class UsuariosRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',UsuarioController.lista); //Ruta que devuelve el listado de usuarios
        this.router.get('/:carnet',UsuarioController.verUsuario); //Ruta que devuelve un solo usuario
        this.router.post('/',UsuarioController.crearUsuario); //Ruta que envía el método post para inserción de datos
        this.router.delete('/:carnet',UsuarioController.eliminarUsuario); //Ruta para eliminar usuario
        this.router.put('/:carnet',UsuarioController.actualizarUsuario); //Ruta para actualizar usuario
    }
}

const usuariosR = new UsuariosRoutes();
export default usuariosR.router;