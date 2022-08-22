const BaseController = require("./baseController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController extends BaseController {
  constructor(model, db, userMongo) {
    super(model), (this.items = db.items);
    this.categories = db.categories;
    this.userMongo = userMongo
  }

  async userTest(req, res) {
    const check = await this.items.findAll();
  }

  async mongoInsert(req, res){
    try{
    console.log('hello')
    const { redis } = req;
    console.log(redis)
    
    const newUser = await this.userMongo.createOne({...req.body}) 
    const userCheck = await this.userMongo.findById(newUser._id)
    await redis.set('nameUserName', newUser.name.en, {
      EX:120
    });
    return res.json({newUser, userCheck})
    } catch(err){
      console.log('ERROR', err)
    }
 }

  async getUserItems(req, res) {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ msg: "id field needs to be provided to work" });
    }

    const getItems = await this.model.findOne({
      where: { id: id },
      include: this.items,
    });
    res.json(getItems);
  }

  async getUserItemsWithCat(req, res) {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ msg: "id field needs to be provided to work" });
    }

    const getItems = await this.model.findOne({
      where: { id },
      include: {
        model: this.items,
        include: this.categories,
      },
    });
    res.json(getItems);
  }

  async signUp(req, res) {
    const { name, password } = req.body;
    try {
      const nameCheck = await this.model.findOne({ where: { name } });
      console.log("name Check:", nameCheck);
      if (nameCheck) {
        return res
          .status(400)
          .json({ success: false, msg: "username already in use" });
      }
      const hashedPassword = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUND)
      );
      const newUser = await this.model.create({
        name,
        password: hashedPassword,
      });
      const payload = { id: newUser.id, name: newUser.name };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP,
      });
      return res.json({ token });
    } catch (err) {
      console.log(err);
    }
    console.log("signup Route");
  }

  async login(req, res) {
    const { name, password } = req.body;
    try {
      const user = await this.model.findOne({ where: { name } });
      if (!user) {
        return res.json({ success: failed, msg: "user does not exist" });
      }
      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        return res.json({
          success: failed,
          msg: "you have the wrong password, dumbass",
        });
      }
      const payload = { id: user.id, name: user.name };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP,
      });
      return res.json({ user, token });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
