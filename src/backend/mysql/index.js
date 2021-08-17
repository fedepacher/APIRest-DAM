var mysql = require('mysql');

var mysqlConfig = {
    connectionLimit: 10,
    host: 'mysql-server',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'DAM'
};

var pool = mysql.createPool(mysqlConfig);

/**
 * Conexion con base de datos a traves de un pool
 */
pool.getConnection((err, connection)=>{
    if(err){
        switch(err.code){
            case 'ER_CON_COUNT_ERROR':
                console.log("La base de datos tiene muchas conexiones");
                break;
            case 'ECONNREFUSED':
                console.log('Conexion rechazada');
                break;
        }
    }
    if(connection){
        connection.release();
    }
    return;
});

module.exports=pool;