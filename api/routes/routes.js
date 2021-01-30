'use strict';
module.exports = function (app) {

    var contact = require('../controllers/contactController');

    // contact routes
    app.route('/contacts')
        .get(contact.list_all_contacts)
        .post(contact.create_a_contact);


    app.route('/contacts/:contactId')
        .get(contact.read_a_contact)
        .put(contact.update_a_contact)
        .delete(contact.delete_a_contact);
}
