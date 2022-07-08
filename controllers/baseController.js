const res = require("express/lib/response")

class BaseController {
    constructor(model){
        this.model = model
    }

    testRoute(req,res){
        res.send('THIS WORKS!')
    }
    newThing(req,res){
        res.resn('trying to destroy this')
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