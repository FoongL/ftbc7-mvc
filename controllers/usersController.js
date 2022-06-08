const BaseController = require('./baseController')
// const db = require('../models/index')

class UserController extends BaseController {
    constructor(model, db){
        super(model),
        this.items = db.items
    }

    async userTest(req,res){
        const check = await this.items.findAll()
    }


}

module.exports = UserController