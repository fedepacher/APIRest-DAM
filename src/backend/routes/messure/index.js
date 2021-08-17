var express = require('express');
var route = express.Router();
var pool = require('../../mysql');

/**
 * Metodo para obtener la ultima medicion del dispositivo con id de la base de datos
 */
route.get('/:id', function(req, res){
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});

/**
 * Metodo para obtener todas las mediciones del dispositivo con id de la base de datos
 */
route.get('/:id/all', function(req, res){
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

/**
 * Metodo para insertar una nueva medicion en la base de datos
 */
route.post('/add', function(req, res){
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields){
        if(err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


module.exports = route;