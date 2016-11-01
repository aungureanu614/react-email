var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
    return (
        <div>
            <strong>
                <span>From: {props.from} </span>
                <span> Title: </span>
                <Link to={props.id}>
                	{props.title}
                </Link>

            </strong>
            &nbsp;
          
        </div>
    );
};

module.exports = Email;