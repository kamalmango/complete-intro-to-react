var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    ) 
	}
})

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