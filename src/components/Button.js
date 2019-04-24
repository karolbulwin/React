import React from "react";
export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.increment(this.props.incrementValue);
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.incrementValue}</button>
    );
  }
}
