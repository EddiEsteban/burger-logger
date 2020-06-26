require('dotenv').config({ path: './config/.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const exphbs = require("express-handlebars");
const orm = require( './config/orm' );

app.use(express.static('html'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let result

app.get(`/`, async(req, res)=>{
    console.log('get')
    result = await orm.getWishes()
    // await orm.closeORM()
    return res.render('index', {result})
})

app.post(`/`, async (req, res)=>{
    console.log('post')
    wishBody = req.body
    console.log(wishBody)
    await orm.addWish(wishBody.wish)
    result = await orm.getWishes()
    // await orm.closeORM()
    return res.render('index', {result})
})

app.delete(`/:id`, async (req, res)=>{
    id = req.params.id
    console.log({type: 'delete', req})

})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
