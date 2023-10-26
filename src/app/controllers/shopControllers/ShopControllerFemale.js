const Product = require('../../models/Product-shop/Product-shop-female');

class ShopController {

    async index(req, res, next) {
        try {
            Product.find({}).limit(10).lean() 
            .then(product => res.render('shop/shop-female',{
                product: product
            }))
        } catch (err) {
            next(err);
        }

    };
};

module.exports = new ShopController;