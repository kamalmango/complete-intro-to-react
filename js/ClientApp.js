// this is the main file beucase it doesnt have an export (webpack purporses)
var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement;

var MyFirstComponent = (
  div(null, 
    MyTitleFact({title: 'props are great', color: 'rebeccapurple'}), //instance of the class
    React.createElement(MyTitle, {title: 'use props everywhere', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'props are the best', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
