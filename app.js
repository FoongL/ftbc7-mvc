// importing useful graphQL packages
// const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

// importing useful packages
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// import models
const db = require("./models/index.js");

// starting Mongo
require("./mongo");

// import Mongo Models
const UserMongo = require("./mongo/users");

// initiate model
const userMongo = new UserMongo();

// import controllers
const UsersController = require("./controllers/usersController.js");
const ItemsController = require("./controllers/itemsController.js");
const CategoryController = require("./controllers/categoryController.js");

// initializing Controllers
const userController = new UsersController(db.users, db, userMongo);
const itemsController = new ItemsController(db.items, db);
const categoryController = new CategoryController(db.categories, db);

// import routers
const UsersRouter = require("./routers/usersRouter");
const ItemsRouter = require("./routers/itemsRouter");
const CategoryRouter = require("./routers/categoryRouter");

// import middlewares
const authMiddleware = require("./middleware/auth")();
// const injectRedis = require('./middleware/injectRedis')()

// initialize routers
const usersRouter = new UsersRouter(userController, authMiddleware).routes();
const itemsRouter = new ItemsRouter(itemsController).routes();
const categoryRouter = new CategoryRouter(categoryController).routes();

// below is where we put things together
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => res.render("home"));
app.get('/hack', (req, res) => res.render("hack"))

app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoryRouter);
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true
//   })
// );

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App listening on post ${PORT}`));
