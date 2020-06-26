const mysql = require('mysql')
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
  
const db = new Database({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    insecureAuth : true
});

function selectAll(){
    return db.query('SELECT * FROM burgers')
}

function insertOne(item){
    return db.query('INSERT INTO burgers VALUES(0,?,FALSE)', item)
}

function updateOne(item){
    return db.query('UPDATE burgers SET devoured=TRUE WHERE ?', {id: item})
}

module.exports({
    selectAll,
    insertOne,
    updateOne
})