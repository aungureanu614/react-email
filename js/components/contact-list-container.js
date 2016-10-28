var React = require('react');

var CONTACTS = require('../contacts');
var ContactList = require('./contact-list');

var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};

module.exports = ContactListContainer;