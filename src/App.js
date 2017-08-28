import React from 'react'

// stateful component
class App extends React.Component {
  render() {
    return <h1 classname='Halo'> Halo World </h1>

    // return React.createElement('h1', null, "Hello World");
    // this is the same as the other thing

  }
}

// if you don't need the states and would rather just have a simple component
//  that does not take any input, you can do the following:
// const App = () => <h1> Hello Stateless </h1>
export default App