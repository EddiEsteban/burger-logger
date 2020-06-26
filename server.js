require('dotenv').config({ path: './config/.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const exphbs = require("express-handlebars");
const orm = require( './config/orm' );
const routes = require('./controllers/burger_controller')

app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let result

app.get(`/`, async(req, res)=>{
    console.log('get')
    result = await orm.selectAll()
    console.log(result)
    return res.render('index', {result})
})

app.get(`/:id/`, async(req, res)=>{
    let id = req.params.id

})

app.post(`/`, async (req, res)=>{
    console.log('post')
    burgerReq = req.body
    console.log(wishBody)
    // await orm.insertOne(burgerReq.burger)
    // result = await orm.selectAll()

    // return res.render('index', {result})
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
