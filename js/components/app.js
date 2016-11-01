var React = require('react');

var SidebarContainer = require('./sidebar-container');

var App = function(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <SidebarContainer />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {props.children}  
                </div>
            </div>
        </div>
    );
};

module.exports = App;