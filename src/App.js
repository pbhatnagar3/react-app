import React from 'react'

// stateful component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 classname='Halo'> Halo World </h1>
      </div>
    // return React.createElement('h1', null, "Hello World");
    // this is the same as the other thing

  }
}
export default App



//  # Lecture 1:
    // using the npm i create-react-app -g 
    // for making sure that you have the correct node installed, use nvm
    // make sure that you are using node > 6 to get all features

// # Lecture 2: 2 ways of creating components: stateful components and stateless
    // if you don't need the states and would rather just have a simple component
    //  that does not take any input, you can do the following:
    // const App = () => <h1> Hello Stateless </h1>

// # Lecture 3: 
    // if you don't need the states and would rather just have a simple component
    //  that does not take any input, you can do the following:
    // const App = () => <h1> Hello Stateless </h1>

