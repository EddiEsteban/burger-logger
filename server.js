require('dotenv').config({ path: './config/.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const exphbs = require("express-handlebars");
const routerController = require('./controllers/burgers_controller')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


routerController(app)
app.use(express.static('public')) //placed after router to avoid disrupting route pathways

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
