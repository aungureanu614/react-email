var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Content = function(props) {
    return (
        <div>
            {props.email_content}
        </div>
    );
};

module.exports = Content;