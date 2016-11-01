var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
    return (
        <div>
                {props.emails.content}
            
        </div>
    );
};

module.exports = Email;