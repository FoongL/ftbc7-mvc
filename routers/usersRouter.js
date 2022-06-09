const express = require('express')
const router = express.Router()

class UsersRouter {
    constructor(controller){
        this.controller = controller
    }
    routes(){
        // we will insert routes into here later on
        router.get('/test', this.controller.testRoute.bind(this.controller))
        router.get('/', this.controller.testRoute.bind(this.controller))
        router.get('/userTest', this.controller.userTest.bind(this.controller))
        router.post('/add-user', this.controller.insertOne.bind(this.controller))
        router.get('/user-items/:id', this.controller.getUserItems.bind(this.controller))
        router.get('/user-items-cat/:id', this.controller.getUserItemsWithCat.bind(this.controller))
        return router
    }
}

module.exports = UsersRouter