// const db = require('../models')
const BaseController = require('./baseController')
// const db = require('../models/index')

class UserController extends BaseController {
    constructor(model, db) {
        super(model),
            this.items = db.items
        this.categories = db.categories
    }

    async userTest(req, res) {
        const check = await this.items.findAll()
    }

    async getUserItems(req, res) {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ msg: 'id field needs to be provided to work' })
        }

        const getItems = await this.model.findOne({ where: { id: id }, include: this.items })
        res.json(getItems)
    }

    async getUserItemsWithCat(req, res) {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ msg: 'id field needs to be provided to work' })
        }

        const getItems = await this.model.findOne({
            where: { id }, include: {
                model: this.items,
                include: this.categories
            }
        })
        res.json(getItems)
    }


}

module.exports = UserController