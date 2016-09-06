// this is the main file beucase it doesnt have an export (webpack purporses)
const React = require('react')
const { Link } = require('react-router')

//stateless component
const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'> or Browse All </Link>
  </div>
) 

module.exports = Landing 
