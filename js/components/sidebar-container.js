var React = require('react');
var router = require('react-router');
var Link = router.Link;


var SidebarContainer = function(props) {
    return (
        <nav className="navbar navbar-default">
	        <div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><Link to={"/inbox"}>Inbox</Link></li>
						<li><Link to={"/spam"}>Spam</Link></li>
					</ul>
				</div>
			</div>
		</nav>
    );
};

module.exports = SidebarContainer;