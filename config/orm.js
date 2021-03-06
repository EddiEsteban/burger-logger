const db = require('./connection')


function selectAll(){
    return db.query('SELECT * FROM burgers')
}

function insertOne(item){
    return db.query('INSERT INTO burgers SET id=0, burger_name=?, devoured=FALSE, createdAt=CURRENT_TIMESTAMP', item)
}

function updateOne(item){
    return db.query('UPDATE burgers SET devoured=TRUE WHERE ?', {id: item})
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}

// used in ../models/model.js