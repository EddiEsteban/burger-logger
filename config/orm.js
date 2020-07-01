const db = require('./connection')


function selectAll(){
    console.log('select')
    return db.query('SELECT * FROM burgers')
}

function insertOne(item){
    console.log('insert', item)
    return db.query('INSERT INTO burgers VALUES(0,?,FALSE)', item)
}

function updateOne(item){
    console.log('update', item)
    return db.query('UPDATE burgers SET devoured=TRUE WHERE ?', {id: item})
}

module.exports = {
    selectAll,
    insertOne,
    updateOne
}

// used in ../models/model.js