// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const {Router, Route, IndexRoute, browserHistory} = require('react-router') // destructuring es6
const { store } = require('./Store')
const { Provider } = require('react-redux')

// const {Router, Route, hashHistory} = ReactRouter
// OR (equivalent to)
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const myRoutes = () => (
  <Route path='/' component={Layout} >
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
