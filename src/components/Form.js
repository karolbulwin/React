import React from "react";
import axios from "axios";
export class Form extends React.Component {
  state = {
    userName: ""
  };
  handleSubmit = async event => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(res.data);
    this.setState({ userName: "" });
  };
  handleInput = event => this.setState({ userName: event.target.value });
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={this.handleInput}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
