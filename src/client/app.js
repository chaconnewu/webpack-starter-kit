var React = require('React');
require('./app.less');

var App = React.createClass({
  render () {
    return (
      <h1>Hello, world!</h1>
    );
  }
});

React.render(<App />, document.getElementById('app'));
