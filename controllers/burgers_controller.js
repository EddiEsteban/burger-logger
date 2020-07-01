const model = require('../models/model')

function router(app){
    app.get('/', async (req, res)=>{
        const platter = await model.getPlatter()
        const devoured = await model.getDevoured()
        res.render('index', {platter, devoured})
    })
    
    app.get('/devour/:id', async (req, res)=>{
        let id = await model.devourBurger(req.params.devour)
        res.redirect('/')
    })

    app.post('/', async (req, res)=>{
        console.log(`[POST] with data: `, req.body)
        await model.addBurger(req.body.burger)

        console.log( `platter: `, burger.getAvailable() )
        res.redirect('/')
        
    })
    
}


// app.get(`/`, async(req, res)=>{
//     console.log('get')
//     result = await orm.selectAll()
//     console.log(result)
//     return res.render('index', {result})
// })

// app.get(`/:id/`, async(req, res)=>{
//     let id = req.params.id

// })

// app.post(`/`, async (req, res)=>{
//     console.log('post')
//     burgerReq = req.body
//     console.log(wishBody)
//     // await orm.insertOne(burgerReq.burger)
//     // result = await orm.selectAll()

//     // return res.render('index', {result})
// })



module.exports = router