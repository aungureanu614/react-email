var React = require('react');

var Email = require('./email');
var EMAILS = require('../emails');

var EmailContainer = function(props){
	return (

		<Email emails={EMAILS[props.params.mailbox_name][props.params.emailId]}/>

		)
}

module.exports = EmailContainer;