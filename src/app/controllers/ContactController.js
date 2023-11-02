const Contact = require('../models/Contact');

class ContactController {

    index(req, res, next) {
        res.render("contact");
    };

    opinion(req, res, next) {
        const opinion = new Contact(req.body);
        opinion.save()
            .then(() => res.redirect('contact'))
            .catch(error => { })
            
            console.log(req.body)
    };


};

module.exports = new ContactController;