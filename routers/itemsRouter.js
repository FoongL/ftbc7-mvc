const express = require('express')
const router = express.Router()

class ItemsRouter {
    constructor(controller){
        this.controller = controller
    }
    routes(){
        // we will insert routes into here later on
        router.get('/test', this.controller.testRoute.bind(this.controller))
        router.post('/add-item', this.controller.insertOne.bind(this.controller))
        router.post('/add-item-to-category', this.controller.itemCat.bind(this.controller))
        return router
    }
}

module.exports = ItemsRouter