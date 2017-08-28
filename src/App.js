import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: "",
      b: ""
    }

    this.update = this.update.bind(this);

  }

  update() {
    this.setState({
      a: this.refs.a.value,
      b: this.b.value
    })
  }
  render() {
    return (
      <div>
        <input
          ref='a'
          type='text'
          onChange={this.update.bind(this)}
          / > {this.state.a}

        <input
          ref={ (harry_potter) => this.b = harry_potter}
          type='text'
          onChange={this.update.bind(this)}
          / > {this.state.b}
      </div>
      )
  }
}


export default App;