var React = require('react');

var EMAILS = require('../emails');
var EmailList = require('./email-list');

var EmailListContainer = function() {
    
    return <EmailList emails={EMAILS}/>;
};

module.exports = EmailListContainer;