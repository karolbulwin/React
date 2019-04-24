import React from "react";
export class Time extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date().toLocaleTimeString();
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: (this.time = new Date().toLocaleTimeString())
      });
    }, 1000);
  }
  render() {
    return <p>{this.time}</p>;
  }
}
