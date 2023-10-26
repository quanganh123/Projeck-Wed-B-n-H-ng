const Product = require('../../models/product-shop/Product-shop-vest');

class ShopController {

    async index(req, res, next) {
        try {
            Product.find({}).limit(10).lean() 
            .then(product => res.render('shop/shop-vest',{
                product: product
            }))
        } catch (err) {
            next(err);
        }

    };
};

module.exports = new ShopController;