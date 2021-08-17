var express = require('express');
var app = express();
var cors = require('cors');
var sql = require('./mysql');
var device = require('./routes/device');
var messure = require('./routes/messure');
var spray = require('./routes/spray');

app.use(express.json());

var corsOption = {origin: '*', optionSuccessStatus: 200};
app.use(cors(corsOption));

app.use("/api/device", device);
app.use("/api/messure", messure);
app.use("/api/spray", spray);

const port = process.env.PORT || 3000;//ojo que esta mapeado en el 8000 -> http://localhost:8000/test
app.listen(port, () =>{
    console.log(`API RESTFul Running on port ${port}...`);
    
});