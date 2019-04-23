import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    </div>
  );
}

function Hello(props) {
  return <p>Say Hello to {props.name}!</p>
}

class Button extends React.Component {
  render() {
    return(
      <button onClick={this.props.increment}>Click ME!</button>
    )
  }
}
class Display extends React.Component {
  render() {
    return(
      <p>Double me: {this.props.count}</p>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'React button counter';
    this.state = {
      count: 5
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count * 2
    }) 
  }
  render() {
    return(
      <div>
        <Hello name={this.name}/>
        <Button increment={this.increment}/>
        <Display count={this.state.count}/>
      </div>
    )
  }
}

export default App;
