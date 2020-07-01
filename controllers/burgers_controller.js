const model = require('../models/model')

function router(app){
    app.get('/', async (req, res)=>{
        const platter = await model.getPlatter()
        const devoured = await model.getDevoured()
        res.render('index', {platter, devoured})
    })
    
    app.get('/devour/:id', async (req, res)=>{
        console.log('params', req.params.id)
        let id = await model.devourBurger(req.params.id)
        res.redirect('/')
    })

    app.post('/', async (req, res)=>{
        console.log(`[POST] with data: `, req.body)
        await model.addBurger(req.body['custom-burger'])

        res.redirect('/')
        
    })
    
}


module.exports = router

// used in ../server.js