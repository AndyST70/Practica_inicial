
import {request, Request,Response} from 'express';

import pool from '../database';
import db from '../database';

class usuarioController2 {
    public async lista(req:Request,res:Response){
        //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
        pool.query('SELECT * FROM usuario', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async crearUsuario(req:Request,res:Response){
        //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
        const result = db.query('INSERT INTO usuario set ?', [req.body]);
        console.log(result)
        res.json({message: 'user saved'});
    }

    public eliminarUsuario(req:Request,res:Response){
        res.json({text: 'prueba de eliminación' + req.params.carnet});
    }

    public actualizarUsuario(req:Request,res:Response){
        res.json({text: 'prueba de actualización' + req.params.carnet});
    }

    public verUsuario(req:Request,res:Response){
        res.json({text: 'ver el usuario ' + req.params.carnet});
    }
}

export const UsuarioController = new usuarioController2();