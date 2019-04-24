import React from "react";
export class Display extends React.Component {
  render() {
    return <p>Double me: {this.props.count}</p>;
  }
}
