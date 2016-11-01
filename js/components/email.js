var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
    return (
        <div>
            <strong>
                <span>From: {props.from} </span>
                <span> Title: </span>
                <Link to={'/' + props.id}>
                	{props.title}
                </Link>

            </strong>
            &nbsp;

        </div>
    );
};

module.exports = Email;

/*
NOTE: Your Link will need to specify the whole path.
What I mean is are you in `inbox` or `spam`?
I did it like this:

export default EmailListContainer = (props) => {
    let list = Object.keys(props.emails).map((id, index) => {
        let email = props.emails[index];
        return (
            <li key={index}>
            NOTE: / for path then props.type (inbox or spam) / then the email.id
                <Link to={'/' + props.type + '/' + email.id}>
                    From: {email.from}
                    To: {email.to}
                    Subject: {email.title}
                </Link>
            </li>
        );
    });

    return (
        <ul>
            {list}
        </ul>
    )
};

*/
