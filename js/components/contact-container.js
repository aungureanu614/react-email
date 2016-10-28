var React = require('react');

var CONTACTS = require('../contacts');
var Contact = require('./contact');

var ContactContainer = function(props) {
    var contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />;
};

module.exports = ContactContainer;