// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const ReactDOM = require('react-dom')

//stateless component
const App = () => (
  <div className='app-container'> 
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All </button>
    </div>
  </div>
)  


ReactDOM.render(<App />, document.getElementById('app'))
