const express = require('express');
const router = express.Router();
const shopController = require('../app/controllers/shopControllers/ShopController');
const ShopControllerMale = require('../app/controllers/shopControllers/ShopControllerMale');
const ShopControllerFemale = require('../app/controllers/shopControllers/ShopControllerFemale');
const ShopControllerBackpack = require('../app/controllers/shopControllers/ShopControllerBackpack');
const ShopControllerClock = require('../app/controllers/shopControllers/ShopControllerClock');
const ShopControllerVest = require('../app/controllers/shopControllers/ShopControllerVest');
const ShopControllerFootwear = require('../app/controllers/shopControllers/ShopControllerFootwear');

router.use('/shop-footwear', ShopControllerFootwear.index);
router.use('/shop-vest', ShopControllerVest.index);
router.use('/shop-clock', ShopControllerClock.index);
router.use('/shop-backpack', ShopControllerBackpack.index);
router.use('/shop-female', ShopControllerFemale.index);
router.use('/shop-male', ShopControllerMale.index);
router.use('/', shopController.index);

module.exports = router;