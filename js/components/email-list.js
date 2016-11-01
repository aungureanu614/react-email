var React = require('react');
var Email = require('./email');

var EmailList = function(props) {
  console.log(props); // This is becoming undefined upon clicking the email.
    var emails = Object.keys(props.emails).map(function(emailId, index) {
        var email = props.emails[emailId];
        return (
            <li key={index}>
                <Email id={email.id} to={email.to} from={email.from} title={email.title}
                         content={email.content} />
            </li>
        );
    });
    return (
        <ul>
            {emails}
        </ul>
    );
};

module.exports = EmailList;
