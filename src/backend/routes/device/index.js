var express = require('express');
var route = express.Router();
var pool = require('../../mysql');

/**
 * Metodo para obtener los dispositivos de la base de datos
 */
route.get("/", function(req, res) {
    pool.query('select * from Dispositivos', function(err, result, fields){
        if (err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });    
});

/**
 * Metodo para obtener los dispositivos de la base de datos segun el id
 */
route.get("/:id", function(req, res) {
    pool.query('Select * from Dispositivos where dispositivoId=?', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

// route.post("/", function(req, res) {
//     res.send("post");
// });

// route.put("/", function(req, res) {
//     res.send("put");
// });

// route.delete("/", function(req, res) {
//     res.send("delete");
// });


module.exports = route;