const Product = require('../../models/product-shop/Product-shop-male');

class ShopController {

    async index(req, res, next) {
        try {
            Product.find({}).limit(10).lean() 
            .then(product => res.render('shop/shop-male',{
                product: product
            }))
        } catch (err) {
            next(err);
        }

    };
};

module.exports = new ShopController;