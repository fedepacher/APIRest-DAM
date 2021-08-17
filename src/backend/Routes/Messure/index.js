var express = require('express');
var route = express.Router();
var pool = require('../../mysql');

//Devuelve la ultima medicion
route.get('/:id', function(req, res){
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});

//Devuelve todas las mediciones
route.get('/:id/all', function(req, res){
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

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