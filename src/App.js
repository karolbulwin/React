import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <hr />
        <AppCard />
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
    return (
      <button onClick={this.handleClick}>{this.props.incrementValue}</button>
    )
  }
}
class Display extends React.Component {
  render() {
    return (
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
    setInterval(() => {
      this.setState({
        time: this.time = new Date().toLocaleTimeString()
      });
    }, 1000);
  }
  render() {
    return (
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
    return (
      <div className="Counter">
        <Hello name={this.name} />
        <Button increment={this.increment} incrementValue={1} />
        <Button increment={this.increment} incrementValue={5} />
        <Button increment={this.increment} incrementValue={10} />
        <Button increment={this.increment} incrementValue={100} />
        <Display count={this.state.count} />
        <Time />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt=''></img>
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}</div>
          <div className='url'><a href={profile.html_url} target='_blank' rel="noopener noreferrer">See my GitHub profile</a></div>
        </div>
      </div>
    )
  }
}

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  )
}

class Form extends React.Component {
  state = {
    userName: ''
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(res.data);
    this.setState({ userName: '' });
  };
  handleInput = event => this.setState({ userName: event.target.value });
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        placeholder='GitHub username'
        value={this.state.userName}
        onChange={this.handleInput}
        required>
        </input>
        <button>Add card</button>
      </form>
    )
  }
}

class AppCard extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'The GitHub Cards App';
  }
  state = {
    profiles: []
  }
  addNewProfile = (profileData) => {
    console.log(profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div class='appCard'>
        <div className='header'>{this.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;
