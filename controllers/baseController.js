class BaseController {
    constructor(model){
        this.model = model
    }

    testRoute(req,res){
        res.send('THIS WORKS!')
    }

    async insertOne(req, res){
        console.log('i am trying to insert')
        const {data} = req.body
        const output = await this.model.create({...data})
        res.status(200).json(output)
    }
}

module.exports = BaseController