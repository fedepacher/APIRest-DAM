var express = require('express');
var route = express.Router();
var pool = require('../../mysql');

route.get("/", function(req, res) {
    pool.query('select * from Dispositivos', function(err, result, fields){
        if (err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });    
});

route.get("/:id", function(req, res) {
    pool.query('Select * from Dispositivos where dispositivoId=?', [req.params.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

route.post("/", function(req, res) {
    res.send("post");
});

route.put("/", function(req, res) {
    res.send("put");
});

route.delete("/", function(req, res) {
    res.send("delete");
});


module.exports = route;