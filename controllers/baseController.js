const res = require("express/lib/response")

class BaseController {
    constructor(model){
        this.model = model
    }

    testRoute(req,res){
        res.send(process.env.testRoute)
    }
    newThing(req,res){
        res.send('new thing')
    }

    newThing(req,res){
        console.log('I am doing more things lah lahl ahla hlahl')
        res.send('newerThing')
    }

    anotherone(req,res){
        res.send('DJ KHALID')
    }

    anotherNewOne(req,res){
        res.send('MORE KHALID')
    }

    async insertOne(req, res){
        console.log('i am trying to insert')
        try{
        const data = req.body
        const output = await this.model.create({...data})
        res.json(output)
        } catch(err){
            console.log(err)
        }
    }


    errorHandler(code,  msg){
        let status = code || 400

        res.status(status).send(msg)
    }
}

module.exports = BaseController