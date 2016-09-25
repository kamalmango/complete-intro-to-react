const redux = require('redux')
const reactRedux = require('react-redux') // helper functions to make redux really easy to use with react

const SET_SEARCH_TERM = 'setSearchTerm' // action
const initialState = {
  searchTerm: ''
}

// root reducer
const rootReducer = (state = initialState, action) => {
  // console.log(state, action) // for debugging
  switch (action.type) {
    case SET_SEARCH_TERM:
      // const newState = {}
      // Object.assign(newState, state, {searchTerm: action.value})
      // return newState

      // could dispatch to another reducer by doing 
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

// const store = redux.createStore(rootReducer) // for production code this is all you need, you wont need redux dev tools
//to make redux devtools work:
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

// const mapStateToProps = (state) => { 
//   return { searchTerm: state.searchTerm } 
// }

//same as

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm }) // pass it into react as a property called searchTerm
// whatever component we reference it from its going to be this.props.searchTerm

// we want to be able to dispatch the actions easily
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm}) // think of dispatch as the same as root reducer
    }
  }
}

// for example inside one of our components we would do 
// this.props.setSearchTerm('house')
// this will call dispatch 
// dispatch will feed it into rootreducer actoin with the previous state of what our store was 


// now use react redux to make this a wrapper for react componenets 
// typically you will have many connectors becuase not all react components care about all actions or all state so you will make different connectors to different componentts
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
// same as
//module.exports = { connector: connector, store: store }





