// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const {Router, Route, hashHistory} = require('react-router') //destructuring es6

// const {Router, Route, hashHistory} = ReactRouter
// OR (equivalent to)
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

//stateless component
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)  


ReactDOM.render(<App />, document.getElementById('app'))
