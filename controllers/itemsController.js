const BaseController = require('./baseController')

class ItemsController extends BaseController {
    constructor(model){
        super(model)
    }

    testRoute(req,res){
        try{
        res.send('i am in the ITEMS controller')
        }  catch(err){
            this.errorHandler(403, err)
        }
    }
}

module.exports = ItemsController