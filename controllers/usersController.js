const BaseController = require('./baseController')

class UserController extends BaseController {
    constructor(model){
        super(model)
    }

    userTest(req,res){
        res.send('i am in the user controller')
    }
}

module.exports = UserController