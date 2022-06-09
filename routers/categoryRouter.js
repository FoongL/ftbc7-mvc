const express = require('express')
const router = express.Router()

class CategoryRouter {
    constructor(controller){
        this.controller = controller
    }
    routes(){
        // we will insert routes into here later on
        router.get('/test', this.controller.testRoute)
        router.put('/add-category', this.controller.insertOne.bind(this.controller))
        return router
    }
}

module.exports = CategoryRouter