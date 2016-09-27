require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server') // rendering react to a string?
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./js/Store.jsx')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate) // will create/ return a new function that whenever we call template its going to create a new string using this template
const ClientApp = require('./js/ClientApp.jsx')
const Routes = ClientApp.Routes

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => { // uses the same matching algorithm that react router does and will run it on the server for us
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString( // body is a string of what our react app looks like
        React.createElement(Provider, {store}, 
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({ body })) // same as {body:body}
    } else {
      res.status(404).send('Not found')
    }
  }) 
})

console.log('listening on port' + port)
app.listen(port)
