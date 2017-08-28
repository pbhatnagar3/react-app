import React from 'react'

// stateful component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state text",
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value});
  }
  render() {
      let txt = this.state.txt + '-' + this.state.cat;
    return (
      <div>
        <h1 classname='txt'>{txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        
      </div>
    )
    // return React.createElement('h1', null, "Hello World");
    // this is the same as the other thing

  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "Default text",
  cat: 100
}


        
const Widget = (props) => <input type='text' onChange={props.update}/>
export default App



