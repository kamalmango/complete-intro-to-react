// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')

// no commas in es6 class
class Landing extends React.Component { 
  constructor (props) {
    super(props) // has to be passed to react component 

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value) // es6 classes do not do autobinding so 'this' is going to refer to window instead of our react component
  }

  goToSearch (event) {
    hashHistory.push('search') // redirect to the search page
    event.preventDefault() // prevent it from trying to move to another page as html forms will want to do 
  }
 
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all'> or Browse All </Link>
      </div>
    )
  }  
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
