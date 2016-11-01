var React = require('react');

var MAILBOXES = require('../emails');
var EmailList = require('./email-list');

var MailboxListContainer = function(props) {
    
    return <EmailList emails={MAILBOXES[props.params.mailbox_name]} box={props.params.mailbox_name}/>;
};

module.exports = MailboxListContainer;