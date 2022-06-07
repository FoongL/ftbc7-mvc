// importing useful packages
const express = require('express')
const cookieParser = require('cookie-parser')

// import models
const db = require('./models/index.js')

// import controllers
const UsersController = require('./controllers/usersController.js')
const ItemsController = require('./controllers/itemsController.js')

// initializing Controllers
const userController = new UsersController(db.users)
const itemsController = new ItemsController(db.items)

// import routers 
const UsersRouter = require('./routers/usersRouter')
const ItemsRouter = require('./routers/itemsRouter')

// initialize routers
const usersRouter = new UsersRouter(userController).routes()
const itemsRouter = new ItemsRouter(itemsController).routes()

// below is where we put things together
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(cookieParser())


app.get('/', (req, res)=> res.render('axios'))

app.use('/users', usersRouter)
app.use('/items', itemsRouter)

const PORT = 3004

app.listen(PORT, ()=>console.log(`App listening on post ${PORT}`))