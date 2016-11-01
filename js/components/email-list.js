var React = require('react');
var router = require('react-router');
var Link = router.Link;

var EmailList = function(props) {
    var emails = Object.keys(props.emails).map(function(emailId, index) {
        var email = props.emails[emailId];
        return (
            <li key={index}>
                    From: {email.from}
                    To: {email.to}
                <Link to={'/' + props.box + '/' + email.id}>
                    
                    Title: {email.title}
                </Link>
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