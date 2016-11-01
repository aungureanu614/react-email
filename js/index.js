var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var App = require('./components/app');


var MailboxListContainer = require('./components/mailbox-list-container');
var EmailContainer = require('./components/email-container');

var IndexRoute = router.IndexRoute;

var routes = (
     <Router history={hashHistory}>
     	<Route path={"/"} component={App}>

     		<Route path={":mailbox_name"}>
          <IndexRoute component={MailboxListContainer}/>
     			<Route path={":emailId"}>
            <IndexRoute component={EmailContainer}/>
          </Route>
     		</Route>
     	</Route>

     </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
