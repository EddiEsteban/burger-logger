const orm = require('../config/orm')

async function getPlatter(){
    const burgers = await orm.selectAll()
    return burgers.filter(burger=>!burger.devoured)
    
}

async function getDevoured(){
    const burgers = await orm.selectAll()
    return burgers.filter(burger=>burger.devoured)
}

function addBurger(name){
    return orm.insertOne(name)
}

function devourBurger(id){
    return orm.updateOne(id)
}

module.exports = {
    getPlatter, 
    getDevoured, 
    addBurger,
    devourBurger
}

// used in ../controllers/burgers_controller.js