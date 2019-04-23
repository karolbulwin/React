import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

function Hello(props) {
  return <p>Say Hello to {props.name}!</p>
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.increment(this.props.incrementValue)
  }
  render() {
    return(
      <button onClick={this.handleClick}>{this.props.incrementValue}</button>
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

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date().toLocaleTimeString();
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        time: this.time = new Date().toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    return(
      <p>{this.time}</p>
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
  increment(incrementValue) {
    this.setState({
      count: this.state.count + incrementValue
    }) 
  }
  render() {
    return(
      <div className="Counter">
        <Hello name={this.name}/>
        <Button increment={this.increment} incrementValue={1}/>
        <Button increment={this.increment} incrementValue={5}/>
        <Button increment={this.increment} incrementValue={10}/>
        <Button increment={this.increment} incrementValue={100}/>
        <Display count={this.state.count}/>
        <Time /> 
      </div>
    )
  }
}

export default App;
