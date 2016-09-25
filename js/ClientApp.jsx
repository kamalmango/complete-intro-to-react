// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const {Router, Route, IndexRoute, hashHistory} = require('react-router') // destructuring es6
const { store } = require('./Store')
const { Provider } = require('react-redux')

// const {Router, Route, hashHistory} = ReactRouter
// OR (equivalent to)
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App
