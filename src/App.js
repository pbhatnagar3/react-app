import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
      </div>
      )
  }
}


const Title = (props) => <h1> Title {props.text} </h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`wtf no text! what am I supposed to do now. Give me ${propName}`);
    }
  }
}
export default App