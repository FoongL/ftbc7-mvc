const express = require('express')
const router = express.Router()

class ItemsRouter {
    constructor(controller){
        this.controller = controller
    }
    routes(){
        // we will insert routes into here later on
        router.get('/test', this.controller.testRoute)
        // router.get('/userTest', this.controller.userTest)
        return router
    }
}

module.exports = ItemsRouter