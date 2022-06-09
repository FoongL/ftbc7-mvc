const BaseController = require('./baseController')

class ItemsController extends BaseController {
    constructor(model, db) {
        super(model)
        this.users = db.users
        this.categories = db.categories
    }

    testRoute(req, res) {
        try {
            res.send('i am in the ITEMS controller')
        } catch (err) {
            this.errorHandler(403, err)
        }
    }


// How to associate items to categories through a through table
    async itemCat(req, res) {
        const { categoryId, itemId } = req.body
        if (!categoryId || !itemId) {
            res.status(400).json({ success: false, msg: 'missing ID param for cat or ID' })
        }
        try {
            const category = await this.categories.findOne({ where: { id: categoryId } })
            const item = await this.model.findOne({ where: { id: itemId } })
            await category.addItem(item)
            res.send({sucess: true, msg: 'association added'})
        } catch (err) {
            this.errorHandler(403, err)
        }
    }
}

module.exports = ItemsController