const express = require('express')
const router = express.Router()

class UsersRouter {
    constructor(controller, authMiddleware){
        this.controller = controller
        this.authMiddleware = authMiddleware
        // this.injectRedis = injectRedis
    }
    routes(){
        // we will insert routes into here later on
        // Login and signup routes
        router.post('/signUp', this.controller.signUp.bind(this.controller))
        router.post('/mongo', this.controller.mongoInsert.bind(this.controller))
        router.post('/login', this.controller.login.bind(this.controller))
        router.post('/findOne', this.controller.findOne.bind(this.controller))

        router.use(this.authMiddleware)

        router.post('/test',this.controller.anotherone.bind(this.controller))
        router.get('/', this.controller.testRoute.bind(this.controller))
        router.get('/userTest', this.controller.userTest.bind(this.controller))
        // router.post('/add-user', this.controller.insertOne.bind(this.controller))
        router.get('/user-items/:id', this.controller.getUserItems.bind(this.controller))
        router.get('/user-items-cat/:id', this.controller.getUserItemsWithCat.bind(this.controller))
        return router
    }
}

module.exports = UsersRouter