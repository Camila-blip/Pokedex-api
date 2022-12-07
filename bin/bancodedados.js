async function connect(){
    if(global.connection && global.connection.state  !== 'disconnected')
        return global.connection;
    
    const mysql = require('mysql2/promise');  
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/master");
    console.log("connectou");
    global.connection = connection;
        return connection;
}
connect();


module.exports = {connect}