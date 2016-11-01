var React = require('react');

var EMAILS = require('../emails');
var Content = require('./content');

var EmailContainer = function(props) {
    var email = EMAILS[props.params.emailId];
    return <Content email_id={email.id} email_content={email.content} />;
};

module.exports = EmailContainer;