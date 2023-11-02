// const adminRouter = require('./admin');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const shopRouter = require('./shop');
const homeRouter = require('./home');

function router(app) {

    // app.use('/admin', adminRouter);
    app.use('/contact', contactRouter);
    app.use('/about', aboutRouter);
    app.use('/shop', shopRouter);
    app.use('/', homeRouter);
}

module.exports = router;