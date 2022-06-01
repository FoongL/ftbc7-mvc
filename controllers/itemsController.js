const BaseController = require('./baseController')

class ItemsController extends BaseController {
    constructor(model){
        super(model)
    }

    testRoute(req,res){
        res.send('i am in the ITEMS controller')
    }
}

module.exports = ItemsController