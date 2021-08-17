var express = require('express');
var route = express.Router();
var pool = require('../../mysql');

/**
 * Metodo para obtener todos los log de riego segun el id del dispositivo
 */
route.get('/:id/all', function(req, res){
    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

/**
 * Metodo para insertar un nuevo log en la base de datos
 */
route.post('/add', function(req, res){
    pool.query('Insert into Log_Riegos (apertura,fecha,electrovalvulaId) values (?,?,?)', [req.body.apertura, req.body.fecha, req.body.electrovalvulaId], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    })
});


module.exports = route;
